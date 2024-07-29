// backend/utils/exportUtils.js
const ExcelJS = require('exceljs');
const PDFDocument = require('pdfkit');
const fs = require('fs');

exports.exportToExcel = async (data) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Data');
  
  worksheet.columns = [
    { header: 'Zodiac Sign', key: 'zodiacSign' },
    { header: 'Personality Type', key: 'personalityType' },
    { header: 'Relevant Values', key: 'relevantValues' }
  ];
  
  data.forEach(d => {
    worksheet.addRow(d);
  });
  
  const buffer = await workbook.xlsx.writeBuffer();
  return buffer;
};

exports.exportToPDF = async (data) => {
  const doc = new PDFDocument();
  const stream = fs.createWriteStream('output.pdf');
  doc.pipe(stream);
  
  data.forEach(d => {
    doc.text(`Zodiac Sign: ${d.zodiacSign}`);
    doc.text(`Personality Type: ${d.personalityType}`);
    doc.text(`Relevant Values: ${d.relevantValues.join(', ')}`);
    doc.moveDown();
  });
  
  doc.end();
  
  return new Promise((resolve, reject) => {
    stream.on('finish', () => {
      const buffer = fs.readFileSync('output.pdf');
      resolve(buffer);
    });
    stream.on('error', reject);
  });
};
