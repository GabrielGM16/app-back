// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/collect', dataController.collectData);
router.post('/analyze', dataController.analyzeData);

module.exports = router;
