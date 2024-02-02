import express from "express";
import EditorialController from "../controllers/EditorialController";

const router = express.Router();

router.post("/create", EditorialController.create);
router.get("/getAll", EditorialController.getAll);
router.put("/update/:id", EditorialController.update);
router.delete("/delete/:id", EditorialController.remove);

export default router;