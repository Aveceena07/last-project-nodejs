import express from "express"; 
import {
    addWallet,
    getAllWallet,
    getOneWallet,
    updateWallet,
    deleteWallet,
} from "../controllers/Wallet.js";

const router = express.Router();

router.get("/", getAllWallet);
router.post("/", addWallet);
router.get("/:id", getOneWallet);
router.put("/:id", updateWallet);
router.delete("/:id", deleteWallet);

export default router;