const express = require("express");//cos we need express router
const router = express.Router();
const {
  authUser
} = require("../controller/userControllers");

router.post("/login",authUser);

module.exports = router;