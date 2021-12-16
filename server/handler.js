const { MongoClient } = require("mongodb");
const { json } = require("stream/consumers");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// using uuid to create unique id for our customers
const { v4: uuidv4 } = require("uuid");

const userInput = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const id = uuidv4();

  const { email } = req.body;

  const post = { ...req.body, id };

  try {
    await client.connect();

    const db = client.db("SpotLight");

    if (email) {
      await db.collection("SignedinUsers").insertOne(post);
    } else {
      await db.collection("guestUsers").insertOne(post);
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

    // console.log(registeredUser, "check");
    // console.log(guestUser, "test");

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

    const { likes } = req.body;

    const { id } = req.params;

    const postId = { id };

    const newValue = { likes: Number(likes) };

    let detailsObj = req.body.detail;

    let userEmail = req.body.email;

    let findEmail = { email: userEmail };

    let newLiked = { liked: id };
    // console.log(detailsObj, "detail");
    // console.log(likeNum, "likeNum");

    const registeredUser = await db
      .collection("SignedinUsers")
      .updateMany(findEmail, { $push: newLiked });

    console.log(registeredUser);

    if (detailsObj?.registered === true) {
      const registeredUser = await db
        .collection("SignedinUsers")
        .updateOne(postId, { $set: newValue });
    }

    if (detailsObj?.registered === false) {
      const user = await db
        .collection("guestUsers")
        .updateOne(postId, { $set: newValue });
    }

    res.status(200).json({
      status: 200,
      data: { id, likes },
    });
    client.close();
  } catch (err) {
    // console.log(err.stack)
    res.status(500).json({ status: "Error", data: req.body, msg: err.stack });
  }
};

const getRegisteredUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    const { email } = req.params;

    await client.connect();

    const db = client.db("SpotLight");

    const registeredEmail = { email: email };

    let registeredUser = await db
      .collection("SignedinUsers")
      .find(registeredEmail)
      .toArray();

    if (registeredUser !== undefined) {
      return res.status(200).json({
        status: 200,
        data: registeredUser,
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

module.exports = {
  userInput,
  searchKey,
  updateLikes,
  getRegisteredUser,
};
