const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the name."],
    trim: true,
    maxlength: [100, "product name cannot exceed 100 characters."],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the price."],
    maxlength: [5, "product price cannot exceed 100 characters."],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter the product description"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter the product category. "],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "HeadPhones",
        "Books",
        "Food",
        "Clothes/Shoes",
        "Beauty/Health",
        "Sports",
        "Outdoor",
        "Home",
      ],
      message: "Please select correct category for your product",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter the product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxlength: [5, "stock cannot exceed 5 characters"],
    defaul: 0,
  },
  numOfReviews: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      name: {
        type: String,
        requried: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  craetedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
