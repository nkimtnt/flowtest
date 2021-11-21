const router = require("express").Router();
const controllers = require("../controllers/pet");

router.post("/petregister", controllers.petregisterControl);
router.patch("/petedit", controllers.peteditControl);
router.delete("/petdelete", controllers.petdeleteControl);

module.exports = router;
