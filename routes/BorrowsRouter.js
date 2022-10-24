const borrows = require("../controllers/BorrowsControllers.js");

const router = require("express").Router();

router.get("/", borrows.getAllBorrows);
router.post("/:id", borrows.addBorrows);
router.get("/:id", borrows.getOneBorrows);
router.put("/:id", borrows.updateBorrows);
router.delete("/:id", borrows.deleteBorrows);

module.exports = router;