const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName:           { type: String, required: true, trim: true },
  email:              { type: String, required: true, lowercase: true, trim: true, unique: true },
  phone:              { type: String, required: true, trim: true },
  institution:        { type: String, required: true, trim: true },
  course:             { type: String, required: true },
  courseOther:        { type: String, default: '' },
  specialization:     { type: String, required: true, trim: true },
  yearOfStudy:        { type: String, required: true },
  expectedGraduation: { type: String, required: true },
  cgpa:               { type: String, required: true },
  skills:             { type: String, required: true },
  interests:          { type: String, default: '' },
  careerGoals:        { type: String, default: '' },
  submittedAt:        { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', studentSchema);
