#!/usr/bin/env python3
"""
Markdown Bullet Point Formatter

This script fixes bullet point formatting in Markdown files by ensuring
there are blank lines between consecutive bullet points for better readability.

Usage:
    python fix_bullet_formatting.py <input_file> [output_file]
    
If output_file is not provided, the script will create a backup and modify the original file.
"""

import sys
import re
import os
from pathlib import Path

def fix_bullet_formatting(content):
    """
    Fix bullet point and numbered list formatting by adding blank lines between consecutive items
    and before items that immediately follow non-list text.
    
    Args:
        content (str): The content of the markdown file
        
    Returns:
        str: The formatted content with proper spacing
    """
    lines = content.split('\n')
    result_lines = []
    
    def is_list_item(line):
        """Check if a line is a bullet point or numbered list item."""
        stripped = line.strip()
        return (re.match(r'^- ', stripped) or  # Bullet point
                re.match(r'^\d+\. ', stripped))  # Numbered list
    
    for i, line in enumerate(lines):
        # Check if current line is a list item
        if is_list_item(line):
            # Check if previous line exists and is not empty and is not a list item
            if i > 0 and lines[i - 1].strip() != '' and not is_list_item(lines[i - 1]):
                # Add blank line before list item if not already present
                if not (len(result_lines) > 0 and result_lines[-1] == ''):
                    result_lines.append('')
        
        result_lines.append(line)
        
        # Check if current line is a list item and next line is also a list item
        if is_list_item(line):
            if i + 1 < len(lines):
                next_line = lines[i + 1]
                if is_list_item(next_line):
                    # Add blank line between list items if not already present
                    if next_line.strip() != '':
                        result_lines.append('')
    
    return '\n'.join(result_lines)

def process_file(input_file, output_file=None):
    """
    Process a single markdown file to fix bullet point formatting.
    
    Args:
        input_file (str): Path to the input file
        output_file (str, optional): Path to the output file. If None, overwrites input file.
    """
    input_path = Path(input_file)
    
    if not input_path.exists():
        print(f"Error: Input file '{input_file}' does not exist.")
        return False
    
    if not input_path.suffix.lower() in ['.md', '.markdown']:
        print(f"Warning: '{input_file}' doesn't appear to be a Markdown file.")
    
    # Read the file
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file '{input_file}': {e}")
        return False
    
    # Fix formatting
    formatted_content = fix_bullet_formatting(content)
    
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
    
    # Write the formatted content
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(formatted_content)
        print(f"Formatted file saved: {output_path}")
        return True
    except Exception as e:
        print(f"Error writing file '{output_path}': {e}")
        return False

def main():
    """Main function to handle command line arguments and process files."""
    if len(sys.argv) < 2:
        print("Usage: python fix_bullet_formatting.py <input_file> [output_file]")
        print("\nExample:")
        print("  python fix_bullet_formatting.py City_Defense_Z_Complete_GDD.md")
        print("  python fix_bullet_formatting.py input.md output.md")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None
    
    success = process_file(input_file, output_file)
    
    if success:
        print("✅ Bullet point formatting fixed successfully!")
    else:
        print("❌ Failed to fix bullet point formatting.")
        sys.exit(1)

if __name__ == "__main__":
    main() 