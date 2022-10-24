const invest = require("../controllers/InvestControllers");

const router = require("express").Router();

router.get("/", invest.getAllInvest);
router.post("/:id", invest.addInvest);
router.get("/:id", invest.getOneInvest);
router.put("/:id", invest.updateInvest);
router.delete("/:id", invest.deleteInvest);

module.exports = router;