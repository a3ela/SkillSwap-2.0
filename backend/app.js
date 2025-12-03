const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/errorMiddleware');

// Routes
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/users.route');
const skillRoutes = require('./routes/skills.route');
const sessionRoutes = require('./routes/sessions.route');
const chatRoutes = require('./routes/chat.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/chat', chatRoutes);

app.use(errorMiddleware);

module.exports = app;