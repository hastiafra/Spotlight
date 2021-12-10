const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const userInput = async (req, res) => {

    console.log(req.body)



};

module.exports = {
userInput
};
