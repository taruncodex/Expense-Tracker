import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddExpense } from "../redux/actionType";
import { addNewExpense } from "../redux/action";

export const ExpenseForm = () => {
  const [des, setDes] = useState("");
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (des === "" || amount === null) {
      alert("Enter the Description and Amount...");
      return;
    }

    const newExpense = { des, amount, category };

    dispatch(addNewExpense(newExpense));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 p-6 mt-4 shadow-md"
      >
        <input
          type="text"
          placeholder="Enter Description"
          className=" text-sm p-2 grow rounded-md shadow-md border-2 border-gray-300"
          onChange={(e) => {
            setDes(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter amount"
          className=" text-sm p-2 grow rounded-md shadow-md border-2 border-gray-300"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <select
          className="grow"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          defaultValue={"other"}
        >
          <option value="other">other</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>

        <button
          type="submit"
          className="bg-green-700 text-white rounded-md px-3 py-2 text-sm font-bold"
        >
          Add Expense
        </button>
      </form>
    </>
  );
};
