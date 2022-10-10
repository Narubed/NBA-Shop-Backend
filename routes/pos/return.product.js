const router = require("express").Router();
const returnProduct = require("../../controllers/pos.controller/return.product.controller");

const auth = require("../../lib/auth");

router.post("/", auth, returnProduct.create);

router.get("/", auth, returnProduct.findAll);
router.get("/:id", auth, returnProduct.findOne);

router.delete("/:id", auth, returnProduct.delete);
router.put("/:id", auth, returnProduct.update);

module.exports = router;
