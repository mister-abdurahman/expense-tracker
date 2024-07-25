import axios from "axios";
import { EachExpense } from "../store/context";

const BACKEND_URL = "https://expense-tracker-fd20f-default-rtdb.firebaseio.com";

export function createExpense(expenseData: EachExpense) {
  axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
}
export async function getExpenses() {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);
  console.log(response);
}
