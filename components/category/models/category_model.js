const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  sub_category: {
    type: String,
    trim: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);
