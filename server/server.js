/** Start server for Website. */
const express = require('express');
const app = require("./app");
const { PORT = 3000 } = require('./config');


app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});