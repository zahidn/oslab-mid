"use strict";
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const PORT = process.env.PORT || 5000;
console.log("Hello and hi World");
app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
