import { RemoveExpense, SetBudget } from "./actionType"
import { AddExpense } from "./actionType"
export const setNewBudget = (budget) => {
    return { type: SetBudget, payload: budget }

}

export const addNewExpense = (newExpense) => {
    return { type: AddExpense, payload: newExpense }
}

export const deleteExpense = (id) => {
    return { type: RemoveExpense, payload: id }
}