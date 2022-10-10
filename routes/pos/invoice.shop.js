const router = require("express").Router();
const invoice = require("../../controllers/pos.controller/invoice.shop.controller");
const createinvoice = require("../../controllers/pos.controller/invoice.shop.controller/create.invoice.shop.controller");
const updateinvoice = require("../../controllers/pos.controller/invoice.shop.controller/update.invoice.shop.controller");
const auth = require("../../lib/auth");

router.post("/", auth, createinvoice.create);

router.get("/", auth, invoice.findAll);
router.get("/:id", auth, invoice.findOne);

router.delete("/:id", auth, invoice.delete);
router.put("/:id", auth, updateinvoice.update);

module.exports = router;
