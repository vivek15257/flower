const express = require('express');
const path = require('path');
const app = express();

// Use port 80 if running on a live server, otherwise 3000 for local testing
const PORT = process.env.PORT || 3000;

// Serve the index.html file for any GET request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running beautifully on http://localhost:${PORT}`);
});
