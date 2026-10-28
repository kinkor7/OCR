const { readFileSync } = require('fs');
const { join, basename } = require('path');

/**
 * Read file asynchronously
 * @param {string} filePath - Path to file
 * @returns {Promise<ArrayBuffer>}
 */
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

/**
 * Read file as text asynchronously
 * @param {string} filePath - Path to file
 * @returns {Promise<string>}
 */
function readFileAsText(filePath) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    fs.readFileSync(filePath, 'utf8', (err, text) => {
      if (err) reject(err);
      else resolve(text);
    });
  });
}

/**
 * Read file as buffer asynchronously
 * @param {string} filePath - Path to file
 * @returns {Promise<Buffer>}
 */
function readFileAsBuffer(filePath) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    fs.readFileSync(filePath, (err, buffer) => {
      if (err) reject(err);
      else resolve(buffer);
    });
  });
}

module.exports = {
  readFile,
  readFileAsText,
  readFileAsBuffer,
  join,
  basename
};
