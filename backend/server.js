// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the Express app
const server = express();

// Middleware
server.use(express.json());
server.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://tomarvidhi627:<your_password>@cluster0.jiln4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => console.log('MongoDB connection error:', err));

// Routes
server.use('/api/users', require('./routes/userRoutes')); // Ensure this file exists

// Define the port
const PORT = 5000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
