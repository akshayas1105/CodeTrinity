const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const connectDB = require('./src/config/db');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Database Connection
connectDB();

// Routes
// app.use('/api/auth', require('./src/routes/auth.routes'));
app.use('/api/alerts', require('./src/routes/alert.routes'));

// Health Check
app.get('/', (req, res) => {
    res.json({ message: 'DisasterLink Backend Running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
