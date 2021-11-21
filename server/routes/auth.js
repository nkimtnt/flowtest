const router = require("express").Router();
const controllers = require("../controllers/auth");

router.post("/signup", controllers.signupControl);
router.post("/signin", controllers.signinControl);
router.post("/signout", controllers.signoutControl);

module.exports = router;
