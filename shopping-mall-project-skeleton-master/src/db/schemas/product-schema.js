import { Schema } from "mongoose";

const ProductSchema = new Schema(
  {    
    category: {
        type: String, // categories = DOLL, PERFUME, ETC
        ref: 'category',
        required: true,
    },
    personType: {
        type: String, // person type = 1유형, 2유형, 3유형
        ref: 'personType', 
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