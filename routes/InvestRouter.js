import invest from "../controllers/InvestControllers.js";

const router = express.Router();

router.get("/", invest.getAllInvest);
router.post("/:id", invest.addInvest);
router.get("/:id", invest.getOneInvest);
router.put("/:id", invest.updateInvest);
router.delete("/:id", invest.deleteInvest);

export default router;