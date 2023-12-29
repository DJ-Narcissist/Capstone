const express = require('express');
const app = require("./app"); // Make sure this module sets up the Express app correctly
const { PORT = 3000 } = require('./config');
const adminRoutes = require('./routes/admin');
const publicRoutes = require('./routes/public');

// Use public and admin routes
app.use('/', publicRoutes);
app.use('/admin', adminRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
