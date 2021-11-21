const router = require("express").Router();
const controllers = require("../controllers/user");
// const checkToken = require("../middlewares.token");

// router.use(checkToken);
router.get("/userinfo", controllers.userinfoControl);
router.post("/userImage", controllers.userimageControl);
router.patch("/useredit", controllers.usereditControl);

module.exports = router;
