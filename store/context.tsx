import React, { createContext, useState } from "react";
import { ExpenseData } from "../data/dummy-data";

export interface EachExpense {
  id?: string;
  description: string;
  date: Date | string;
  amount: number;
}

interface Props {
  expenses: EachExpense[];
  addExpense: (x: EachExpense) => void;
  removeExpense: (x: string) => void;
  updateExpense: (x: EachExpense) => void;
  setExpensesToRemote: (x: EachExpense[]) => void;
  isLoading: boolean;
  setIsLoading: (x: boolean) => void;
  errorMsg: string;
  setErrorMsg: (x: string) => void;
}

export const ExpenseContext = createContext<Props>({
  expenses: [],
  addExpense: () => null,
  removeExpense: () => null,
  updateExpense: () => null,
  setExpensesToRemote: () => null,
  isLoading: false,
  setIsLoading: () => null,
  errorMsg: "",
  setErrorMsg: () => null,
});

export const ExpenseContextProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expenses, setExpenses] = useState<EachExpense[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // console.log(expenses);`
  function setExpensesToRemote(expenses: EachExpense[]) {
    const inverted = expenses.reverse();
    setExpenses(inverted);
  }
  function addExpense(data: EachExpense) {
    setExpenses((prev) => [data, ...prev]);
  }
  function removeExpense(id: string) {
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
      value={{
        expenses,
        addExpense,
        removeExpense,
        updateExpense,
        setExpensesToRemote,
        isLoading,
        setIsLoading,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
