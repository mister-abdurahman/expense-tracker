import axios from "axios";
import { EachExpense } from "../store/context";

const BACKEND_URL = "https://expense-tracker-fd20f-default-rtdb.firebaseio.com";

export async function createExpense(expenseData: EachExpense) {
  const response = await axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
  const id = response.data.name;
  return id;
}
export async function getExpenses() {
  const expenses = [];
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);
  for (const key in response.data) {
    const expenseObj: any = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
export function updateExpense(id, expenseData) {
  axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
}
export function deleteExpense(id) {
  axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}
