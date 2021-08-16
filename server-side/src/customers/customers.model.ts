/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { Customer, Gender } from './customers.interface';

const customerSchema: mongoose.Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: Gender,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
}, {
  toJSON: {
    virtuals: true,
    transform(_doc, ret): void {
      delete ret._id;
    },
  },
  versionKey: false,
  id: true,
});

export const CustomerModel = mongoose.model<Customer & mongoose.Document>('Customer', customerSchema);
