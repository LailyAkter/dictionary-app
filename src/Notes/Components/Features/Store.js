import { configureStore } from '@reduxjs/toolkit'

import notesReducer from './NotesSlice/NotesSlice';

const store = configureStore({
    reducer:notesReducer
})

export default store;