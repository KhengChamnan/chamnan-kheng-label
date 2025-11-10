const express = require('express'); 
const app = express(); 
app.get('/', (req, res) => { 
res.send('Hello, GitHub Actions!'); 
}); 

// New endpoint for health check
app.get('/health', (req, res) => { 
res.status(200).json({ status: 'healthy', timestamp: new Date() }); 
}); 

module.exports = app;