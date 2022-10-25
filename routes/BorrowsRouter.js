import borrows from "../controllers/BorrowsControllers.js";

const router = express.Router();

router.get("/", borrows.getAllBorrows);
router.post("/:id", borrows.addBorrows);
router.get("/:id", borrows.getOneBorrows);
router.put("/:id", borrows.updateBorrows);
router.delete("/:id", borrows.deleteBorrows);

export default router;