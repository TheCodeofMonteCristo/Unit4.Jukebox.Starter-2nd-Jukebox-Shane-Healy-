// Main entry point for the Express server

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const playlistRoutes = require('./routes/playlists');
const trackRoutes = require('./routes/tracks');
const errorHandler = require('./middleware/error');

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON requests

// Routes
app.use('/users', userRoutes);
app.use('/playlists', playlistRoutes);
app.use('/tracks', trackRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
