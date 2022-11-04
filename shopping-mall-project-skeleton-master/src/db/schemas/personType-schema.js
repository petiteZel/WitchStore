import { Schema } from 'mongoose';

const PersonTypeSchema = new Schema(
  {
    personType: {
        type: String,
        required: true
      },
  },
  {
      collection: 'personTypes',
      timestamps: true,
  }
);
  
export { PersonTypeSchema };