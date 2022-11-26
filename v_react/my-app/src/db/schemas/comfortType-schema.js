import { Schema } from 'mongoose';

const personTypeSchema = new Schema(
  {
    personType: {
        type: String,
        required: true
      },
  },
  {
      collection: 'comfortTypes',
      timestamps: true,
  }
);
  
export { personTypeSchema };
