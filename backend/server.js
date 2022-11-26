//this is considered as view file 
require("dotenv").config(); 
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes")
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json())

app.get("/", (req, res) => { 
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes); 
app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));