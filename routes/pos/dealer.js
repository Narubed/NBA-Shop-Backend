const router = require("express").Router();
const dealer = require("../../controllers/pos.controller/dealer.controller");
const dealerCreact = require("../../controllers/pos.controller/dealer.controller/create.dealer.controller");
const dealerUpdate = require("../../controllers/pos.controller/dealer.controller/update.dealer.controller");

const dealerRequest = require("../../controllers/pos.controller/dealer.request.controller");
const dealerCreactRequest = require("../../controllers/pos.controller/dealer.request.controller/create.dealer.request.controller");
const dealerUpdateRequest = require("../../controllers/pos.controller/dealer.request.controller/update.dealer.request.controller");

const auth = require("../../lib/auth");

router.post("/request/", auth, dealerCreactRequest.create);
router.get("/request/", auth, dealerRequest.findAll);
router.get("/request/:id", auth, dealerRequest.findOne);
router.delete("/request/:id", auth, dealerRequest.delete);
router.put("/request/:id", auth, dealerUpdateRequest.update);
// __________________________________________________________
router.post("/", auth, dealerCreact.create);
router.get("/", auth, dealer.findAll);
router.get("/:id", auth, dealer.findOne);
router.delete("/:id", auth, dealer.delete);
router.put("/:id", auth, dealerUpdate.update);

module.exports = router;
