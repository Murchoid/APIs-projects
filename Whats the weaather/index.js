const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Set the port number

require('dotenv').config();
const API_KEY= process.env.API_KEY;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow specific headers
    next();
});


// Define a route to handle requests for the API key
app.get('/api/key', (req, res) => {
    // Return the API key (replace 'YOUR_API_KEY' with your actual API key)
    res.json({ apiKey: API_KEY});
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

