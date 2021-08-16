export interface Transaction {
  id?: string;
  costumerId: string;
  totalPrice: number;
  currency: string;
  cerditCardType: string;
  cerditCardNumber: string;
}
