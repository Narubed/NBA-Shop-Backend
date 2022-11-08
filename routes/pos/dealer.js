const router = require("express").Router();
const dealer = require("../../controllers/pos.controller/dealer.controller");

const auth = require("../../lib/auth");

router.post("/", auth, dealer.create);

router.get("/", auth, dealer.findAll);
router.get("/:id", auth, dealer.findOne);

router.delete("/:id", auth, dealer.delete);
router.put("/:id", auth, dealer.update);

module.exports = router;
