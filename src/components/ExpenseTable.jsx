import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import { deleteExpense } from "../redux/action";
export const ExpenseTable = () => {
  const Expenses = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <>
      <div className=" mt-20 shadow-lg ">
        <table width={"100%"}>
          <thead>
            <tr className=" text-left text-xs font-medium text-gray-500 tracking-wider">
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">amount</th>
              <th className="px-6 py-3">action</th>
            </tr>
          </thead>
          <tbody className="mt-10 uppercase ">
            {Expenses.map((ele, i) => (
              <tr key={i} className="px-6 py-3 text-left text-xs font-medium  ">
                <td className="px-6 py-4 text-gray-900 whitespace-nowrap ">
                  {ele.des}
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-green-700">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100">
                    {ele.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap ">{ele.amount}</td>

                <td
                  className="px-6 py-4 whitespace-nowrap text-red-800"
                  onClick={() => handleDelete(i)}
                >
                  {<Trash2 size="16" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
