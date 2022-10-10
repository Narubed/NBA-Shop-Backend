const router = require("express").Router();
const product = require("../../controllers/pos.controller/product.nba.controller");
const createProduct = require("../../controllers/pos.controller/product.nba.controller/create.product.nba.controller");
const updateProduct = require("../../controllers/pos.controller/product.nba.controller/update.product.nba.controller");
const auth = require("../../lib/auth");

router.post("/", auth, createProduct.create);

router.get("/", auth, product.findAll);
router.get("/:id", auth, product.findOne);

router.delete("/:id", auth, product.delete);
router.put("/:id", auth, updateProduct.update);

module.exports = router;
