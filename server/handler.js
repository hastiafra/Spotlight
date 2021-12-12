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

const searchKey = async (req, res) => {

  const client = new MongoClient(MONGO_URI, options);

  try {

  const { searchInput } = req.params;
    await client.connect();

    const db = client.db("SpotLight");

    const query = { keywordArr: searchInput.toLowerCase() };

    // console.log(searchInput, "string")

    let registeredUser = await db
      .collection("SignedinUsers")
      .find(query)
      .toArray();

    let guestUser = await db
      .collection("guestUsers")
      .find(query)
      .toArray();

      console.log(registeredUser, "check")
      console.log(guestUser, "test")

    if (registeredUser.length > 0 || guestUser.length> 0) {
      return res.status(200).json({
        status: 200,
        data: registeredUser.concat(guestUser),
      });
    }

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
  searchKey,
};
