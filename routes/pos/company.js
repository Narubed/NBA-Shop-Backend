const router = require("express").Router();
const company = require("../../controllers/pos.controller/company.controller");

const auth = require("../../lib/auth");

router.post("/", company.create);

router.get("/", company.findAll);
router.get("/:id", company.findOne);

router.delete("/:id", company.delete);
router.put("/:id", company.update);

module.exports = router;
