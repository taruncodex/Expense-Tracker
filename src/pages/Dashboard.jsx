import React from "react";
import { Budget } from "../components/Budget";
import { ExpenseForm } from "../components/ExpenseForm";
import { ExpenseTable } from "../components/ExpenseTable";

export const Dashboard = () => {
  console.log("hi");

  return (
    <section className="p-4">
      <h1 className="text-4xl font-bold ml-4">Expense Tracker</h1>
      <div className="md:px-16 lg:px-14">
        <Budget />
        <ExpenseForm />
        <ExpenseTable />
      </div>
    </section>
  );
};
