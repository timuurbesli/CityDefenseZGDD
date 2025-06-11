import re

def format_section(content):
    # Add a newline after headers (lines starting with #)
    content = re.sub(r'(^#.*$)', r'\1\n', content, flags=re.MULTILINE)
    
    # Add newline after section titles (lines starting with **)
    content = re.sub(r'(^\*\*[^:]*\*\*)$', r'\1:\n', content, flags=re.MULTILINE)
    
    # Convert bullet points with attributes to headers with line breaks
    def replace_bullet_attribute(match):
        bullet = match.group(1)
        attribute = match.group(2)
        value = match.group(3)
        # If it's already a header (starts with **), just add line breaks
        if bullet.strip() == '**':
            return f"{bullet}{attribute}{value}\n"
        # Otherwise, convert bullet point to header
        return f"\n**{attribute}** {value}\n"
    
    content = re.sub(r'([-*]|\*\*)\s*\*\*([^:]*?):\*\*\s*(.*?)(?=\n|$)', 
                     replace_bullet_attribute, content)
    
    # Remove any triple newlines or more
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