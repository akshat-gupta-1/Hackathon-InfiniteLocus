import express from "express";
import {
  getProductByCategory,
  getProductById,
  updateForProduct,
  getProductAll,
} from "../controllers/productController.js";
const router = express.Router();

// Route to get all products

router.get("/byCategory", getProductByCategory);
router.get("/all", getProductAll);

router.get("/byId", getProductById);

router.post("/update_review", updateForProduct);

export default router;
