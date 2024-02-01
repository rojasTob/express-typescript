import express from "express";
import CategoryController from "../controllers/CategoryController";

const router = express.Router();

router.post("/create", CategoryController.create);
router.get("/getAll", CategoryController.getAll);
router.put("/update/:id", CategoryController.update);
router.delete("/delete/:id", CategoryController.remove);

export default router;