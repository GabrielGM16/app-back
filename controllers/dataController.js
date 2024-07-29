// backend/controllers/dataController.js
const UserProfile = require('../models/UserProfile');
const { PythonShell } = require('python-shell');

exports.collectData = async (req, res) => {
  try {
    const newData = await UserProfile.create(req.body);
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.analyzeData = (req, res) => {
  const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: './scripts/',
    args: [JSON.stringify(req.body)]
  };

  PythonShell.run('analysis.py', options, (err, results) => {
    if (err) res.status(500).json({ message: err.message });
    res.status(200).json({ clusters: results });
  });
};
