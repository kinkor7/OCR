/**
 * Command Line Interface Utilities
 */

const fs = require('fs');
const path = require('path');

/**
 * Parse command line arguments
 * @param {string[]} args - Process arguments
 * @returns {object} Parsed options
 */
function parseArgs(args) {
  const options = {};
  let i = 0;

  while (i < args.length) {
    const arg = args[i];

    if (!arg.startsWith('-')) {
      // Positional argument
      let value;
      if (arg.startsWith('-')) {
        throw new Error(`Unknown option: ${arg}`);
      }
      value = arg;

      if (options.input === undefined) options.input = value;
      else if (options.output === undefined) options.output = value;
      else if (options.lang === undefined) options.lang = value;
      else if (options.confidence === undefined) options.confidence = parseInt(value);
    } else {
      // Short or long option
      const match = arg.match(/^-{1,2}([a-z]+)(?:\s*(:|=\s*)([^\s:\/=]*))?$/i);

      if (match) {
        const [flag] = match;
        if (options.flag === undefined) options.flag = value;
      }
    }

    i++;
  }

  return options;
}

/**
 * Show help message
 */
function showHelp() {
  console.log(`
OCR PDF - Extract text from scanned documents

Usage:
  ocr-pdf [options]

Options:
  -i, --input <file>    Input PDF file path (required)
  -o, --output <file>   Output text file path (default: output.txt)
  --lang <code>         Language code for OCR (default: auto)
  --confidence <num>     Minimum confidence threshold 0-100 (default: 85)

Examples:
  ocr-pdf -i document.pdf -o extracted.txt
  ocr-pdf --input scan.png --output result.txt --lang en --confidence 90

Supported Languages: en, zh-cn, zh-tw, ja, ko, fr, de, es, it, pt, ru, ar, he
`);
}

module.exports = { parseArgs, showHelp };
