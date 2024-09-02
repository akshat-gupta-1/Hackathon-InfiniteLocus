import express from "express";
import {
  createReview,
  updateReview,
  getReviewsById,
} from "../controllers/reviewController.js";
const router = express.Router();

// Route to get all reviews

router.post("/CreateReview", createReview);
router.get("/review_by_id", getReviewsById);

router.post("/updateReview", updateReview);

export default router;
