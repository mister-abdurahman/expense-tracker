export class Expense {
  id: number;
  description: string;
  date: Date;
  amount: number;
  constructor(id: number, description: string, date: Date, amount: number) {
    this.id = id;
    this.description = description;
    this.date = date;
    this.amount = amount;
  }
}
