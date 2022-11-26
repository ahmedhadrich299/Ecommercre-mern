const express = require("express");//cos we need express router
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

//Get all products from db

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;