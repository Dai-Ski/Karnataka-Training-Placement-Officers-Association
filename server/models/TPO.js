const mongoose = require('mongoose');

const tpoSchema = new mongoose.Schema({
  fullName:              { type: String, required: true, trim: true },
  designation:           { type: String, required: true, trim: true },
  institution:           { type: String, required: true, trim: true },
  institutionType:       { type: String, required: true },
  institutionTypeOther:  { type: String, default: '' },
  email:                 { type: String, required: true, lowercase: true, trim: true, unique: true },
  phone:                 { type: String, required: true, trim: true },
  city:                  { type: String, required: true, trim: true },
  state:                 { type: String, required: true, trim: true },
  experience:            { type: Number, required: true, min: 0 },
  submittedAt:           { type: Date, default: Date.now },
});

module.exports = mongoose.model('TPO', tpoSchema);
