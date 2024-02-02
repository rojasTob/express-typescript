import express from "express";
import AuthorController from "../controllers/AuthorController";

const router = express.Router();

router.post("/create", AuthorController.create);
router.get("/getAll", AuthorController.getAll);
router.get("/get/:id", AuthorController.getById);
router.put("/update/:id", AuthorController.update);
router.delete("/delete/:id", AuthorController.remove);

export default router;