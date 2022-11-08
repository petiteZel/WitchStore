import { Schema } from 'mongoose';

const comfortTypeSchema = new Schema(
  {
    comfortType: {
        type: String,
        required: true
      },
  },
  {
      collection: 'comfortTypes',
      timestamps: true,
  }
);
  
export { comfortTypeSchema };
