const mongoose = require('mongoose');

const industrySchema = new mongoose.Schema({
  companyName:       { type: String, required: true, trim: true },
  industry:          { type: String, required: true },
  industryOther:     { type: String, default: '' },
  companySize:       { type: String, required: true },
  contactPersonName: { type: String, required: true, trim: true },
  designation:       { type: String, required: true, trim: true },
  email:             { type: String, required: true, lowercase: true, trim: true },
  phone:             { type: String, required: true, trim: true },
  website:           { type: String, default: '' },
  address:           { type: String, required: true },
  city:              { type: String, required: true, trim: true },
  state:             { type: String, required: true, trim: true },
  hiringNeeds:       { type: String, default: '' },
  submittedAt:       { type: Date, default: Date.now },
});

module.exports = mongoose.model('Industry', industrySchema);
