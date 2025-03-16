// Create web server
const express = require('express');
const app = express();
const comments = require('./comments.json');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});