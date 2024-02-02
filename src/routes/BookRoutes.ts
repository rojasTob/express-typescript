import express from "express";
import BookController from "../controllers/BookController";

const router = express.Router();

router.post("/create", BookController.create);
router.get("/getAll", BookController.getAll);
router.put("/update/:id", BookController.update);

export default router;