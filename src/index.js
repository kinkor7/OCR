/**
 * OCR PDF - Main Entry Point
 * Optical Character Recognition for PDF files
 */

const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const { ocrPdf, extractTextFromPdf } = require('./ocr/pdf.js');
const utils = require('./utils/index.js');

/**
 * Command Line Interface
 */
function main() {
  const args = process.argv.slice(2);
  let options = {
    input: null,
    output: 'output.txt',
    lang: 'auto',
    confidence: 85
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '-i' || arg === '--input') {
      options.input = args[++i];
    } else if (arg === '-o' || arg === '--output') {
      options.output = args[++i];
    } else if (arg === '--lang') {
      options.lang = args[++i];
    } else if (arg === '--confidence') {
      options.confidence = parseInt(args[++i]);
    }
  }

  // Check if input file exists
  if (!options.input) {
    console.error('Error: Input file is required');
    console.error('Usage: ocr-pdf -i <input.pdf> -o <output.txt>');
    process.exit(1);
  }

  const optionsStr = [
    options.input,
    '--output', options.output,
    `--lang ${options.lang}`,
    `--confidence ${options.confidence}`
  ].join(' ');

  console.log(`OCR PDF - Starting OCR process`);
  console.log(optionsStr);
  console.log('');

  // Process the PDF
  const result = ocrPdf(fs.readFileSync(options.input), options.lang)
    .then(extractedText => {
      // Write output file
      const fs = require('fs');
      fs.writeFileSync(options.output, extractedText);

      const fileName = path.basename(options.input);
      return {
        status: 'success',
        fileName,
        outputFile: options.output,
        text: extractedText.substring(0, 100) + (extractedText.length > 100 ? '...' : '')
      };
    })
    .catch(error => ({
      status: 'error',
        error: error.message
    }));

  return result;
}

module.exports = { main, options };
