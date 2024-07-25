import axios from "axios";
import { EachExpense } from "../store/context";

export function createExpense(expenseData: EachExpense) {
  axios.post(
    "https://expense-tracker-fd20f-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
