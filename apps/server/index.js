require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const registrationRoutes = require('./routes/registrations');
const otpRoutes = require('./routes/otp');
const eventRoutes = require('./routes/events');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: '*' })); // Allow all origins for Vercel deployment
app.use(express.json());

// Routes
app.use('/api/register', registrationRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/admin', adminRoutes);

// Health check
app.get('/api/v1/health', (_req, res) => {
  console.log(`[${new Date().toISOString()}] Health check pinged!`);
  res.json({ status: 'ok', message: 'KTPOA backend is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 KTPOA backend server running on http://localhost:${PORT}`);
});
// no ballss