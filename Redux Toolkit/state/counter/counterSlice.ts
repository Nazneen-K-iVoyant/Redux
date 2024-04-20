import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 interface CounterState{
    value:number;
 }

 const initialState:CounterState={
    value:0
 }

 const counterSlice=createSlice({
    name:'counter' ,                     //---> Name of the slice
    initialState,
    reducers:{
      increment:(state)=>{
         state.value+=1
      },
      decrement:(state)=>{
         state.value-=1
      },
      incrementByAmount:(state,action)=>{
         state.value+=action.payload   //---> Using payload/ passing values to action
      }

    }
})

/*Asyncronous Operations ---> Using createAsyncThunk */

export const incrementAsync = createAsyncThunk(
   
)


export const {increment,decrement,incrementByAmount}=counterSlice.actions;
export default counterSlice.reducer;

