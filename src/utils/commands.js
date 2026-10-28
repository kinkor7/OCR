/**
 * OCR Commands Handler
 */

const fs = require('fs');
const path = require('path');

/**
 * Extract text from PDF using built-in engine
 * @param {string} pdfPath - Path to PDF file
 * @returns {Promise<string>}
 */
function extractText(pdfPath) {
  try {
    const buffer = fs.readFileSync(pdfPath);
    return require('../ocr/pdf.js').extractTextFromPdf(buffer, 'auto');
  } catch (error) {
    console.error('Error extracting text:', error.message);
    throw error;
  }
}

/**
 * OCR scanned document
 * @param {string} pdfPath - Path to scanned PDF file
 * @param {string} lang - Language code
 * @returns {Promise<object>}
 */
function ocrDocument(pdfPath, lang = 'auto') {
  try {
    const buffer = fs.readFileSync(pdfPath);
    return require('../ocr/pdf.js').ocrPdf(buffer, lang);
  } catch (error) {
    console.error('Error during OCR:', error.message);
    throw error;
  }
}

/**
 * Process multiple PDFs in directory
 * @param {string} dirPath - Directory containing PDF files
 * @param {object} options - Processing options
 * @returns {Promise<object[]>} Array of results
 */
function batchProcess(dirPath, options = {}) {
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.pdf'));
  return Promise.all(files.map(file => {
    const pdfPath = path.join(dirPath, file);
    return ocrDocument(pdfPath, options.lang || 'auto');
  }));
}

module.exports = {
  extractText,
  ocrDocument,
  batchProcess
};
