const path = require('path');
const express = require('express');
const morgan = require("morgan");


const PORT = 8000;
const {userInput, searchKey}= require("./handler")

express()
.use(morgan("tiny"))
.use(express.json())

.post("/api/newData", userInput)

.get("/api/:searchInput", searchKey)

.listen(PORT, function() {
  console.info('🌍 Listening on port ' + PORT);
});
