import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    shop_name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    about_us: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    review_agg: {
      type: Number,
    },
    review_ids: [{
      type: Schema.Types.ObjectId,
      ref: 'Review',
    }],
  });

  export default mongoose.model('Product',productSchema)