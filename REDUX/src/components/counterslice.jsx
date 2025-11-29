import { createSlice } from "@reduxjs/toolkit";

const counterslice=createSlice({
    name:"counter",
    initialState:{
        count:0,
    },

    reducers:{
        increment:(state)=>{
            state.count++;
        },
         decrement:(state)=>{
            state.count--;
        },
         reset:(state)=>{
            state.count=0;
        }
    }
})

export const {increment,decrement,reset}=counterslice.actions;

export default counterslice.reducer;