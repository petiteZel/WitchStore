import { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    address: new Schema({
          receiverName: { type: String, required: true },
          receiverPhoneNumber: { type: String, required: true},
          receiverAddress: { type: String, required: true },
          _id: false,
      }),    
    status: {
      type: String,
      required: false,
      default: "상품 준비중",
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

export { OrderSchema };