import React from 'react'
import Budget from './Budget';
import './BudgetApp.css';
import { AppProvider } from './Context/AppContext';

export default function BudgetApp() {
  
  return (
    <>
        <AppProvider>
            <Budget/>
        </AppProvider>
    </>
  )
}
