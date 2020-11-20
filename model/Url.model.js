/* eslint-disable comma-dangle */
import mongoose from 'mongoose';

const URLschema = new mongoose.Schema(
  {
    original_url: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('URLschema', URLschema);
