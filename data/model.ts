export class Expense {
  id: number;
  title: string;
  date: string;
  price: number;
  constructor(id: number, title: string, date: string, price: number) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.price = price;
  }
}
