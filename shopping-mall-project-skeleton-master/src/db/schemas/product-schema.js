import { Schema } from "mongoose";

const ProductSchema = new Schema(
  {    
    category: {
        type: Schema.Types.ObjectId, // categories = DOLL, PERFUME, ETC
        ref: 'category',
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,  
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    detailDescription: {
        type: String,
        required: true,
    },
  },
  {
    collection: 'products',
    timestamps: true,
  }
);

export { ProductSchema };