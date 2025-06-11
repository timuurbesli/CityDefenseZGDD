#!/usr/bin/env python3
"""
ASCII Tree Converter

This script converts ASCII tree structures (using ├──, └──, │ characters) 
into more readable formats suitable for both Markdown and Word documents.

Usage:
    python convert_ascii_trees.py <input_file> [output_file]
"""

import sys
import re
from pathlib import Path

def convert_ascii_trees(content, format_type='bullets'):
    """
    Convert ASCII tree structures to more readable formats.
    
    Args:
        content (str): The content of the markdown file
        format_type (str): 'bullets', 'numbers', or 'indented'
        
    Returns:
        str: The converted content
    """
    lines = content.split('\n')
    result_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line starts an ASCII tree structure
        if ('├──' in line or '└──' in line or '│' in line):
            # Find the header line (should be the previous non-empty line)
            header_line = None
            for j in range(i-1, -1, -1):
                if lines[j].strip():
                    header_line = lines[j]
                    break
            
            # Extract the tree structure
            tree_lines = []
            current_line = i
            
            while current_line < len(lines) and ('├──' in lines[current_line] or '└──' in lines[current_line] or '│' in lines[current_line]):
                tree_lines.append(lines[current_line])
                current_line += 1
            
            # Convert the tree structure
            if tree_lines:
                converted = convert_tree_structure(tree_lines, format_type)
                result_lines.extend(converted)
                i = current_line
            else:
                result_lines.append(line)
                i += 1
        else:
            result_lines.append(line)
            i += 1
    
    return '\n'.join(result_lines)

def convert_tree_structure(tree_lines, format_type='bullets'):
    """
    Convert a list of ASCII tree lines to the specified format.
    """
    converted_lines = []
    
    for line in tree_lines:
        # Clean the line and extract the content
        content = line.strip()
        
        # Remove ASCII tree characters and clean up
        content = re.sub(r'^[├└│─\s]+', '', content)
        content = content.strip()
        
        if not content:
            continue
            
        # Determine indentation level based on original structure
        indent_level = 0
        if '│   ' in line:
            indent_level = line.count('│   ')
        elif '├──' in line or '└──' in line:
            if '│   ' in line:
                indent_level = line.count('│   ')
        
        # Format based on type
        if format_type == 'bullets':
            indent = '    ' * indent_level
            if indent_level == 0:
                converted_lines.append(f"{indent}• {content}")
            else:
                converted_lines.append(f"{indent}◦ {content}")
        elif format_type == 'numbers':
            indent = '    ' * indent_level
            converted_lines.append(f"{indent}- {content}")
        elif format_type == 'indented':
            indent = '    ' * indent_level
            converted_lines.append(f"{indent}{content}")
        else:  # simple
            converted_lines.append(f"- {content}")
    
    return converted_lines

def process_file(input_file, output_file=None, format_type='bullets'):
    """
    Process a single markdown file to convert ASCII trees.
    
    Args:
        input_file (str): Path to the input file
        output_file (str, optional): Path to the output file
        format_type (str): Format type for conversion
    """
    input_path = Path(input_file)
    
    if not input_path.exists():
        print(f"Error: Input file '{input_file}' does not exist.")
        return False
    
    # Read the file
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file '{input_file}': {e}")
        return False
    
    # Convert ASCII trees
    converted_content = convert_ascii_trees(content, format_type)
    
    # Determine output file
    if output_file is None:
        # Create backup
        backup_path = input_path.with_suffix(f'{input_path.suffix}.backup')
        try:
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Backup created: {backup_path}")
        except Exception as e:
            print(f"Warning: Could not create backup: {e}")
        
        output_path = input_path
    else:
        output_path = Path(output_file)
    
    # Write the converted content
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(converted_content)
        print(f"Converted file saved: {output_path}")
        return True
    except Exception as e:
        print(f"Error writing file '{output_path}': {e}")
        return False

def main():
    """Main function to handle command line arguments."""
    if len(sys.argv) < 2:
        print("Usage: python convert_ascii_trees.py <input_file> [output_file] [format_type]")
        print("\nFormat types:")
        print("  bullets  - Use bullet points (• and ◦)")
        print("  numbers  - Use numbered lists")
        print("  indented - Simple indented text")
        print("  simple   - Simple bullet points")
        print("\nExample:")
        print("  python convert_ascii_trees.py City_Defense_Z_Complete_GDD.md")
        print("  python convert_ascii_trees.py input.md output.md bullets")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None
    format_type = sys.argv[3] if len(sys.argv) > 3 else 'bullets'
    
    if format_type not in ['bullets', 'numbers', 'indented', 'simple']:
        print(f"Error: Invalid format type '{format_type}'")
        print("Valid types: bullets, numbers, indented, simple")
        sys.exit(1)
    
    success = process_file(input_file, output_file, format_type)
    
    if success:
        print(f"✅ ASCII trees converted successfully to {format_type} format!")
    else:
        print("❌ Failed to convert ASCII trees.")
        sys.exit(1)

if __name__ == "__main__":
    main() 