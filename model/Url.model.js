/* eslint-disable comma-dangle */
import { Schema, Model } from 'mongoose';

const URLschema = new Schema(
  {
    original_url: {
      type: String,
      required: true,
      unique: true,
    },
    shorten_url: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    _id: false,
    timestamps: true,
  }
);

export default Model('URLschema', URLschema);
