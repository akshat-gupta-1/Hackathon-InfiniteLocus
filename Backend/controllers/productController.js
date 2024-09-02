import Product from "../models/product.js";

// Get all Products based on Category
export const getProductByCategory = async (req, res) => {
  try {
    const { category } = req.query; // Get the category from query parameters
    const products = await Product.find({ category: category });

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found in this category" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getProductAll = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const { id } = req.query; // Get the product ID from query parameters
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a user
export const updateForProduct = async (req, res) => {
  try {
    const { review_agg } = req.body; // Extract the review_agg from the request body
    const { id } = req.query;
    // Update the product's review_agg field based on the product ID passed in the URL
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { review_agg: review_agg }, // Update only the review_agg field
      { new: true, runValidators: true }, // Return the updated document and run validators
    );

    // If no product is found with the given ID, return a 404 error
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Successfully updated the product, return the updated product details
    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    // Return a 400 error if there was an issue with the update process
    res.status(400).json({ error: error.message });
  }
};
