const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  date: { type: String, required: true, trim: true },
  location: { type: String, trim: true },
  status: { type: String, trim: true }, // e.g., "Registration Open", "Coming Soon"
  type: { type: String, trim: true },   // e.g., "Flagship Event", "Workshop"
  description: { type: String, trim: true },
  highlights: [{ type: String }],
  icon: { type: String, default: 'Calendar' },
  section: { 
    type: String, 
    enum: ['flagship', 'upcoming', 'student', 'regular'],
    default: 'upcoming' 
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', eventSchema);
