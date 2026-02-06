import { act } from "react"
import { AddExpense, RemoveExpense, SetBudget } from "./actionType"


const initialValue = {
    budget: 0,
    expense: []
}

export const expenseReducer = (state = initialValue, action) => {

    switch (action.type) {
        case SetBudget: {
            return { ...state, budget: action.payload };
        }
        case AddExpense: {
            console.log("Entered")
            const money = action.payload.amount;
            return { ...state, expense: [action.payload, ...state.expense] }
        }

        case RemoveExpense: {
            const id = action.payload;
            const newExpenses = state.expense.filter((ele, i) => i != id);
            return { ...state, expense: [...newExpenses] }
        }

        default:
            return state;
    }
}
