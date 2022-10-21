const router = require("express").Router();
const product = require("../../controllers/pos.controller/product.shop.controller");
const createProduct = require("../../controllers/pos.controller/product.shop.controller/create.product.shop.controller");
const updateProduct = require("../../controllers/pos.controller/product.shop.controller/update.product.shop.controller");
const auth = require("../../lib/auth");

router.get("/shop-id/:id",auth, product.findByShopId);

router.post("/", auth, createProduct.create);

router.get("/", auth, product.findAll);
router.get("/:id", auth, product.findOne);

router.delete("/:id", auth, product.delete);
router.put("/:id", auth, updateProduct.update);

module.exports = router;
