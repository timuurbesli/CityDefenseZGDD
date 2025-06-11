import re

def should_be_heading(text):
    """Determine if a bold text should be converted to a heading based on context."""
    major_keywords = [
        'System', 'Framework', 'Overview', 'Architecture', 'Mechanics',
        'Management', 'Structure', 'Classification', 'Strategy', 'Metrics'
    ]
    
    minor_keywords = [
        'Types', 'Categories', 'Philosophy', 'Design', 'Goals',
        'Experience', 'Journey', 'Phase', 'Rewards', 'Conditions',
        'Victory', 'Defeat', 'Currency', 'Economic', 'Production',
        'Collection', 'Function', 'Generation', 'Expenditure',
        'Content', 'Campaign', 'Users', 'Engagement', 'KPIs'
    ]
    
    # Clean the text
    clean_text = text.strip('* ')
    
    # Check if it should be a major (h4) or minor (h5) heading
    is_major = any(keyword in clean_text for keyword in major_keywords)
    is_minor = any(keyword in clean_text for keyword in minor_keywords)
    
    return (is_major, is_minor)

def split_line_content(line):
    """Split a line that contains both heading and content."""
    # Match pattern: **Heading:** Content or **Heading**Content
    heading_match = re.match(r'\*\*([^:*]+)(?::\*\*|\*\*)\s*(.*)', line)
    if heading_match:
        heading = heading_match.group(1)
        content = heading_match.group(2)
        return heading, content
    return None, None

def determine_heading_level(text, current_section_level):
    """Determine the appropriate heading level based on content and context."""
    # Remove asterisks and get clean text
    clean_text = text.strip('* ')
    
    # Main section headers (already ###) should remain as is
    if text.startswith('#'):
        return text
    
    # Check if it should be a heading
    is_major, is_minor = should_be_heading(clean_text)
    
    # Convert to appropriate heading level
    if is_major:
        return f"#### {clean_text}"
    elif is_minor:
        return f"##### {clean_text}"
    
    # For specific attributes or properties, keep as bold
    return f"**{clean_text}**"

def format_section(content):
    # Split content into lines for processing
    lines = content.split('\n')
    formatted_lines = []
    current_section_level = 0
    in_list = False
    
    for i, line in enumerate(lines):
        # Skip empty lines
        if not line.strip():
            formatted_lines.append(line)
            continue
        
        # Handle existing headers (###)
        if line.startswith('#'):
            current_section_level = line.count('#')
            formatted_lines.append(line)
            formatted_lines.append('')
            in_list = False
            continue
        
        # Handle bullet points
        if line.strip().startswith('- '):
            in_list = True
            # If it's a bullet point with bold text
            if '**' in line:
                match = re.match(r'-\s*\*\*([^:]+):\*\*\s*(.*)', line)
                if match:
                    attribute = match.group(1)
                    value = match.group(2)
                    # Keep attributes as bold but remove bullet point if not in a list context
                    if i > 0 and lines[i-1].strip().startswith('- '):
                        formatted_lines.append(line)
                    else:
                        line = f"**{attribute}:** {value}"
                        formatted_lines.append(line)
                else:
                    formatted_lines.append(line)
            else:
                formatted_lines.append(line)
            continue
        
        # Handle lines with both heading and content
        if '**' in line and not line.strip().startswith('- '):
            heading, content = split_line_content(line)
            if heading and content:
                # Convert heading to appropriate level
                formatted_heading = determine_heading_level(heading, current_section_level)
                formatted_lines.append(formatted_heading)
                formatted_lines.append('')  # Add blank line after heading
                if content.strip():
                    # Handle any bold text in content
                    content_parts = re.split(r'(\*\*[^*]+\*\*)', content)
                    formatted_content = ''
                    for part in content_parts:
                        if part.startswith('**') and part.endswith('**'):
                            # This is a bold section
                            clean_part = part.strip('*')
                            if should_be_heading(clean_part)[1]:  # Check if it should be a minor heading
                                formatted_content += f"\n##### {clean_part}\n\n"
                            else:
                                formatted_content += part + ' '
                        else:
                            formatted_content += part
                    formatted_lines.append(formatted_content.strip())
                continue
        
        # Handle bold text that might be headers
        if line.strip().startswith('**') and line.strip().endswith('**'):
            if not in_list:
                line = determine_heading_level(line, current_section_level)
            formatted_lines.append(line)
            continue
        
        # Default case
        formatted_lines.append(line)
    
    # Join lines and clean up multiple newlines
    content = '\n'.join(formatted_lines)
    content = re.sub(r'\n{3,}', '\n\n', content)
    
    return content

def format_gdd_file(input_file, output_file=None):
    if output_file is None:
        output_file = input_file
        
    try:
        # Read the input file
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Format the content
        formatted_content = format_section(content)
        
        # Write the formatted content back to the file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(formatted_content)
            
        print(f"Successfully formatted {input_file}")
        
    except Exception as e:
        print(f"Error processing file: {str(e)}")

if __name__ == "__main__":
    # Format the GDD file
    format_gdd_file("City_Defense_Z_Complete_GDD.md") 