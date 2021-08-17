/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { Transaction } from './transactions.interface';

const transactionSchema: mongoose.Schema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  cerditCardType: {
    type: String,
    required: true,
  },
  cerditCardNumber: {
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

export const TransactionModel = mongoose.model<Transaction & mongoose.Document>('Transaction', transactionSchema);
