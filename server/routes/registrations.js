const express = require('express');
const router = express.Router();

const Industry = require('../models/Industry');
const TPO = require('../models/TPO');
const Student = require('../models/Student');

// POST /api/register/industry
router.post('/industry', async (req, res) => {
  try {
    const doc = new Industry(req.body);
    await doc.save();
    res.status(201).json({
      success: true,
      message: 'Industry registration saved successfully.',
      id: doc._id,
    });
  } catch (error) {
    console.error('Industry registration error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to save industry registration.',
    });
  }
});

// POST /api/register/tpo
router.post('/tpo', async (req, res) => {
  try {
    const doc = new TPO(req.body);
    await doc.save();
    res.status(201).json({
      success: true,
      message: 'TPO registration saved successfully.',
      id: doc._id,
    });
  } catch (error) {
    console.error('TPO registration error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to save TPO registration.',
    });
  }
});

// POST /api/register/student
router.post('/student', async (req, res) => {
  try {
    const doc = new Student(req.body);
    await doc.save();
    res.status(201).json({
      success: true,
      message: 'Student registration saved successfully.',
      id: doc._id,
    });
  } catch (error) {
    console.error('Student registration error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to save student registration.',
    });
  }
});

module.exports = router;
