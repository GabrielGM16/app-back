// backend/controllers/exportController.js
const UserProfile = require('../models/UserProfile');
const { exportToExcel, exportToPDF } = require('../utils/exportUtils');

exports.exportData = async (req, res) => {
  try {
    const data = await UserProfile.findAll();
    const excelBuffer = await exportToExcel(data);
    res.status(200).send(excelBuffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.exportPDF = async (req, res) => {
  try {
    const data = await UserProfile.findAll();
    const pdfBuffer = await exportToPDF(data);
    res.status(200).send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
