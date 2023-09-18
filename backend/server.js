const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const User = require('./models/user');

const db = require('./db.js')
const authRoutes = require('./routes/auth.js')
const app = express();

app.use(express.json());
app.use(cors());

app.use(passport.initialize());
app.use('/api/auth', authRoutes);

// MongoDB Config
const dbURI = 'mongodb://localhost:27017/timetracking';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
