const express = require('express');
const path = require('path');
const app = express();

// Provide a path that the server can access
app.use('/maps', express.static('geo'));

app.listen(3200, () => {
  console.log('Server running on http://localhost:3200');
});
