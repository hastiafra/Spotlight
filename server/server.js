const path = require('path');
const express = require('express');


const PORT = 8000;
const {userInput}= require("./handler")

express()

.use(express.json())

.get("/test", (req, res)=>{
    res.status(200).json({test:"test"})
})

.post("/api/newData", userInput)

.listen(PORT, function() {
  console.info('🌍 Listening on port ' + PORT);
});
