import React from 'react'
import './App.css';
import BudgetApp from './Budget_App/BudgetApp';
import CurrencyCounverter from './Currency_Counverter/CurrencyCounverter';

import Dictionary from './Dictionary_App/Dictionary'
import Notes from './Notes/Notes';
import Random_Person from './Random_Person_List/Random_Person';
import Random_Quote from './Random_Quote_Generator/Random_Quote';
import Todo from './Todo_List_App/Todo';
import WordLetterCounter from './Word_Letter_counter_application/WordLetterCounter'

export default function App() {
  return (
    <div>
      <BudgetApp/>
      <Todo/>
      <Notes/>
      <Random_Person/>
      <Random_Quote/>
      <Dictionary/>
      <WordLetterCounter/>
      <CurrencyCounverter/>
    </div>
  )
}
