import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewBudget } from "../redux/action";

export const Budget = () => {
  const [budget, setBudget] = useState(null);

  const dispatch = useDispatch();

  const newBudget = useSelector((state) => state.budget);
  const expense = useSelector((state) => state.expense);

  const totalExpense = expense.reduce(
    (acc, ele) => (acc += Number(ele.amount)),
    0
  );

  return (
    <>
      <div className="shadow-md  p-6 mt-4">
        <div className="flex gap-3">
          <input
            onChange={(e) => setBudget(e.target.value)}
            type="number"
            placeholder="Enter budget amount"
            className=" text-sm p-2 grow rounded-md shadow-md border-2 border-gray-300"
          />
          <button
            className="bg-blue-700 text-white font-bold rounded-md px-3 py-2 text-sm "
            onClick={() => {
              dispatch(setNewBudget(budget));
            }}
          >
            Set Budget
          </button>
        </div>
        <div className="flex  p-4 mt-3 gap-4 ">
          <div className="bg-blue-100 p-3 grow shadow-sm">
            <h6 className="text-s text-blue-800 font-semibold">Total Budget</h6>
            <h4 className=" text-3xl font-bold">
              <span>$</span>
              {newBudget}
            </h4>
          </div>

          <div className="bg-green-100 p-3 grow shadow-sm">
            <h6 className="text-s text-green-800 font-semibold">Expenses</h6>
            <h4 className=" text-3xl font-bold">
              <span>$</span>
              {totalExpense}
            </h4>
          </div>

          <div className="bg-amber-100 p-3 grow shadow-sm">
            <h6 className="text-s text-amber-800 font-semibold">Remains</h6>
            <h4 className=" text-3xl font-bold">
              <span>$</span> {Number(newBudget) - Number(totalExpense)}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
