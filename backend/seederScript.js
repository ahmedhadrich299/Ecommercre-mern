require("dotenv").config();
//this file to delete all data in our DB and fill it with our data file 

const connectDB = require("./config/db");

const products = require("./data/products");
const users = require("./data/users");

const Product = require("./models/Product");
const User = require("./models/User");

connectDB();

const importData = async () => {
  try {
    await User.deleteMany({})
    await User.insertMany(users)

    await Product.deleteMany({});
    await Product.insertMany(products)

    console.log("Data Import Success");
    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();