import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);
