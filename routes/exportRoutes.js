// backend/routes/exportRoutes.js
const express = require('express');
const router = express.Router();
const exportController = require('../controllers/exportController');

router.get('/excel', exportController.exportData);
router.get('/pdf', exportController.exportPDF);

module.exports = router;
