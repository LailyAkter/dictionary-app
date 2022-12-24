import { createSlice } from '@reduxjs/toolkit'

const storageItems = JSON.parse(localStorage.getItem("items")) !== null ? JSON.parse(localStorage.getItem("items")) : []

const  initialState = {
    items:storageItems,
    searchText:''
}

const setItemFunction = (item) =>{
    localStorage.setItem("items",JSON.stringify(item))
}

export const NotesSlice = createSlice({
    name:'notes',
    initialState:initialState,
    reducers:{
        addNote: (state, action) => {
            state.items.push(action.payload);
            setItemFunction(
                state.items.map((item)=>item)
            )
        },
        removeNote: (state,action) =>{
            state.items = state.items.filter((item)=>item.id !== action.payload);
            setItemFunction(
                state.items.map((item)=>item)
            )
        },
        // updateNote : (state,action) =>{
        //     const {id,note} = action.payload;
        //     const existingItem = state.items.filter((item)=>item.id === id);
        //     if(existingItem){
        //         existingItem.id = id,
        //         existingItem.note = note
        //     }
        //     setItemFunction(
        //         state.items.map((item)=>item)
        //     )
        // },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },

    }
})

export const {addNote,setSearchText,removeNote}=  NotesSlice.actions;
export  default NotesSlice.reducer;