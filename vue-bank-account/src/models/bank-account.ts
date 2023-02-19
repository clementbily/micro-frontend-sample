export interface BankAccount {
  accountNumber: string;
  type: string;
  owner: string;
  operations: Operation[];
}
export interface Operation {
  date: string;
  operation: string;
  amount: number;
}
