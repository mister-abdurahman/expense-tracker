export class Expense {
  id: number;
  title: string;
  date: Date;
  price: number;
  constructor(id: number, title: string, date: Date, price: number) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.price = price;
  }
}
