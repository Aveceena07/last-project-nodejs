const wallet = require("../controllers/WalletControllers");

const router = require("express").Router();

router.get("/", wallet.getAllWallet);
router.post("/:id", wallet.addWallet);
router.get("/:id", wallet.getOneWallet);
router.put("/:id", wallet.updateWallet);
router.delete("/:id", wallet.deleteWallet);

export default router;