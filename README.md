# OCR PDF

Optical Character Recognition tool for PDF files - extract text from scanned documents and images using advanced AI technology.

## Features

- 📄 Extract text from scanned PDFs and images
- 🔍 High-accuracy text recognition with built-in AI models
- 🌐 Support for multiple languages (English, Chinese, Japanese, Korean, etc.)
- 🚀 Fast processing powered by efficient inference engines
- 💾 Save OCR results in various formats (plain text, PDF with embedded text)

## Installation

```bash
npm install -g ocr-pdf
```

## Usage

### Extract Text from PDF

```bash
ocr-pdf --input document.pdf --output extracted-text.txt
```

### OCR Image from PDF

```bash
ocr-pdf --input scanned-image.png --output recognized-text.txt
```

### Batch Processing

```bash
ocr-pdf --dir ./images/ --pattern "*.png" --output-dir results/
```

## Configuration

```bash
ocr-pdf -i input.pdf -o output.txt --lang en --confidence 90
```

| Option | Description | Default |
|--------|-------------|---------|
| -i, --input | Input PDF file path | Required |
| -o, --output | Output text file path | input.txt |
| --lang | Language code | auto |
| --confidence | Minimum confidence threshold (0-100) | 85 |

## Supported Languages

- English (en)
- Chinese (zh-cn, zh-tw)
- Japanese (ja)
- Korean (ko)
- French (fr)
- German (de)
- Spanish (es)
- Italian (it)
- Portuguese (pt)
- Russian (ru)
- Arabic (ar)
- Hebrew (he)

## Advanced Usage

### Process multiple files

```bash
ocr-pdf -dir ./files/ --pattern "*.pdf" -o extracted/%f.txt
```

### Set higher confidence threshold

```bash
ocr-pdf -i document.pdf -o output.txt --confidence 95
```

### Save OCR text back to PDF

```bash
ocr-pdf -i scanned.pdf -o output.pdf --embed-text
```

## License

MIT
