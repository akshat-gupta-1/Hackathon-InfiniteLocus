import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    quality: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    service: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    value: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  });

  export default mongoose.model('Review',reviewSchema)