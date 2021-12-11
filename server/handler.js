const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const userInput = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
  
    const { email } = req.body;

 try {
      await client.connect();
  
      const db = client.db("SpotLight");
  
      if (email) {

        await db.collection("SignedinUsers").insertOne(req.body);
        

      } else {
        await db.collection("guestUsers").insertOne(req.body);
      }
  
      return res.status(200).json({
        status: 200,
        msg: "updated info",
      });
    } catch (err) {
      return res.status(400).json({
        status: 400,
        msg: err.message,
      });
    } finally {
      client.close();
    }
  };

module.exports = {
  userInput,
};
