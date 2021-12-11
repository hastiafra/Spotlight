const path = require('path');
const express = require('express');
const morgan = require("morgan");


const PORT = 8000;
const {userInput}= require("./handler")

express()
.use(morgan("tiny"))
.use(express.json())

.post("/api/newData", userInput)

.listen(PORT, function() {
  console.info('🌍 Listening on port ' + PORT);
});
