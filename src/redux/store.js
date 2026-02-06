import { createStore, legacy_createStore } from "redux";
import { expenseReducer } from "./expenseReducer";

export const store = legacy_createStore(expenseReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())

