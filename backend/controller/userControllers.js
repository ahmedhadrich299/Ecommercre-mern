const User = require("../models/User");

// @desc Auth user
// @route POST /api/users/login
// @access Public

const authUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })}
} catch (error) {
    console.error(error);
    res.status(401).json({ message: "invalid email or password" });
  }
};

module.exports = {
  authUser
}; 