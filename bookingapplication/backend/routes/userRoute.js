const { register, login, logout, mydetails, updateProfile } = require("../controller/UserController");
const { isAuthenticated } = require("../middleware/auth");

const router = require("express").Router();


router.post("/register", register)
router.get("/login", login)
router.get("/logout", logout)
router.route("/myDetails").get(isAuthenticated, mydetails)
router.route("/updateProfile").patch(isAuthenticated, updateProfile)





module.exports = router