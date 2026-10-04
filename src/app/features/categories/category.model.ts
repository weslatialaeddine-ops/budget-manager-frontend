import { TransactionType } from '../../shared/transaction-type.model';

export interface Category {
  id: string;
  name: string;
  types: [TransactionType, ...TransactionType[]];
}
