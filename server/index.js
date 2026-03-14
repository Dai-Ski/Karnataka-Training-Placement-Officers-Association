require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const registrationRoutes = require('./routes/registrations');
const otpRoutes = require('./routes/otp');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/register', registrationRoutes);
app.use('/api/otp', otpRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'KTPOA backend is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 KTPOA backend server running on http://localhost:${PORT}`);
});
