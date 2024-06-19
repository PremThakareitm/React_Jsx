import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:"Prem"
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        changeName:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {changeName} = userSlice.actions
export default userSlice.reducer