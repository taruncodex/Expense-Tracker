import React from "react";
import { ExpenseTable } from "../components/ExpenseTable";
import { useSelector } from "react-redux";

export const History = () => {
  const data = useSelector((state) => state);

  if (data.expense.length != 0) {
    return <ExpenseTable isDelete={false} />;
  }

  return (
    <>
      <div className=" flex min-h-72 items-center text-red-800 font-bold text-2xl justify-center">
        <h1 className="bg-red-100 p-2 align-middle">NO History</h1>
      </div>
    </>
  );
};
