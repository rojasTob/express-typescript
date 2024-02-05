import express from "express";
import BookController from "../controllers/BookController";

const router = express.Router();

router.post("/create", BookController.create);
router.get("/getAll", BookController.getAll);
router.get("/get/:id", BookController.getById);
router.put("/update/:id", BookController.update);
router.put("/buy/:id", BookController.buy);
router.put("/addStock/:id", BookController.addStock);
router.delete("/remove/:id", BookController.remove);

export default router;