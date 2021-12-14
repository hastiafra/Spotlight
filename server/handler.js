const { MongoClient } = require("mongodb");
const { json } = require("stream/consumers");
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

    let guestUser = await db.collection("guestUsers").find(query).toArray();

    console.log(registeredUser, "check");
    console.log(guestUser, "test");

    if (registeredUser !== undefined || guestUser.length !== undefined) {
      return res.status(200).json({
        status: 200,
        data: registeredUser.concat(guestUser),
      });
    } else {
      return res.status(400).json({
        status: 400,
        msg: "keyword not found",
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

const updateLikes = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("SpotLight");
    const { detail, likeNum } = req.body;

    const { _id } = req.params;
    const clientId = { _id };

    const newValue = { likes: Number(likeNum) };

    detail = JSON.parse(detail);

    console.log(clientId, "clientId");
    console.log(detail, "detail");
    console.log(likeNum, "likeNum");

    if (detail.registered === true) {
      const registeredUser = await db
        .collection("SignedinUsers")
        .updateOne(clientId, { $set: newValue });
    }

    if (detail.registered === false) {
      const user = await db
        .collection("guestUsers")
        .updateOne(clientId, { $set: newValue });
    }

    res.status(200).json({
      status: 200,
      data: { _id, likes },
    });
    client.close();
  } catch (err) {
    res.status(500).json({ status: "Error", data: req.body, msg: err.message });
  }
};

module.exports = {
  userInput,
  searchKey,
  updateLikes,
};
