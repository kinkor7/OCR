/**
 * Helper functions for OCR PDF module
 */

const fs = require('fs');
const path = require('path');

/**
 * Get file extension
 * @param {string} filePath - File path
 * @returns {string} File extension without dot
 */
function getExtension(filePath) {
  return path.extname(filePath).substring(1).toLowerCase();
}

/**
 * Read entire file into buffer
 * @param {string} filePath - Path to file
 * @returns {Buffer} File as buffer
 */
function readBuffer(filePath) {
  return fs.readFileSync(filePath);
}

/**
 * Write buffer to file
 * @param {string} filePath - Path to write to
 * @param {Buffer} buffer - Buffer to write
 * @returns {boolean} Success status
 */
function writeBuffer(filePath, buffer) {
  try {
    fs.writeFileSync(filePath, buffer);
    return true;
  } catch (error) {
    console.error('Error writing file:', error.message);
    return false;
  }
}

/**
 * Read text from file
 * @param {string} filePath - Path to file
 * @returns {string} File content as text
 */
function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

module.exports = {
  getExtension,
  readBuffer,
  writeBuffer,
  readText
};
