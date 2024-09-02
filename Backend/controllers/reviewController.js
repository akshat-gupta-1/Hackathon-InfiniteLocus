import Review from "../models/review.js"; // Import the Review model
import Product from "../models/product.js"; // Import the Product model to update the review_ids
import mongoose from "mongoose";

// Create a new review
export const createReview = async (req, res) => {
  try {
    const { product_id, user_id, quality, service, value, comment, approved } =
      req.body;

    // Create a new review instance with data from the request body
    const newReview = new Review({
      product_id: new mongoose.Types.ObjectId(product_id), // Ensure ObjectId type
      user_id: new mongoose.Types.ObjectId(user_id), // Ensure ObjectId type
      quality,
      service,
      value,
      comment,
      approved,
    });

    // Save the new review to the database
    const savedReview = await newReview.save();

    // Update the associated product's review_ids list
    await Product.findByIdAndUpdate(
      product_id,
      { $push: { review_ids: savedReview._id } },
      { new: true }
    );

    // Respond with the saved review data
    res
      .status(201)
      .json({ message: "Review created successfully", review: savedReview });
  } catch (error) {
    // Respond with an error message in case of failure
    res.status(400).json({ error: error.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const { id } = req.query; // Extract the review ID from the URL parameters
    const { approved } = req.body; // Extract the approved status from the request body

    // Find the review by ID and update the approved status
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { approved: approved }, // Update only the approved field
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    // Check if the review was found and updated
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Successfully updated the review, return the updated review details
    res
      .status(200)
      .json({ message: "Review updated successfully", review: updatedReview });
  } catch (error) {
    // Return a 400 error if there was an issue with the update process
    res.status(400).json({ error: error.message });
  }
};
export const getReviewsById = async (req, res) => {
  try {
    const { id } = req.query; // Get the category from query parameters
    const products = await Review.find({ product_id: id });

    if (products.length === 0) {
      return res.status(404).json({ message: "No Reviews found" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
