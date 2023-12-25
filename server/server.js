/** Start server for Website. */
const express = require('express');
const app = require("./app");
const { PORT } = require('./config');

app.get("/api",  (req, res) => {
    res.json({"DJ" : ["Dj Narcissist"] });
});

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});