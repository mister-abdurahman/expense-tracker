import React, { createContext, useState } from "react";
import { ExpenseData } from "../data/dummy-data";

export interface EachExpense {
  id: number;
  description: string;
  date: Date;
  amount: number;
}

interface Props {
  expenses: EachExpense[];
  addExpense: (x: EachExpense) => void;
  removeExpense: (x: number) => void;
  updateExpense: (x: EachExpense) => void;
}

export const ExpenseContext = createContext<Props>({
  expenses: [],
  addExpense: () => null,
  removeExpense: () => null,
  updateExpense: () => null,
});

export const ExpenseContextProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expenses, setExpenses] = useState(ExpenseData);
  // console.log(expenses);

  function addExpense(data: EachExpense) {
    setExpenses((prev) => [...prev, data]);
  }
  function removeExpense(id: number) {
    setExpenses((prev) => prev.filter((el) => el.id !== id));
  }
  function updateExpense(data: EachExpense) {
    setExpenses((prev) => {
      const oldData = prev.filter((el) => el.id !== data.id);
      return [...oldData, data];
    });
  }

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, removeExpense, updateExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
