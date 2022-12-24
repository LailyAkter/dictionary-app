import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
    budget : 2000,
    expenses: [
        {
            id:1,
            title:'Mobile',
            amount: 200
        },
        {   id:2,
            title:'Book',
            amount: 200
        }
    ]
}

const BudgetReducer = (state,action) =>{
    switch (action.type) {
        case "Add_EXPENSE" :
            return {
                ...state,
                expenses: [...state.expenses,action.payload]
            }
        default:
            return state;
    }
}



export const AppProvider = ({children}) =>{
    const [state,dispatch] = useReducer(BudgetReducer,initialState)

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}
