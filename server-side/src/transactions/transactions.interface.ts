export interface Transaction {
  id?: string;
  customerId: string;
  totalPrice: number;
  currency: string;
  cerditCardType: string;
  cerditCardNumber: string;
}
