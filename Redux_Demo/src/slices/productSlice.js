import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name:"Product",
    initialState:{
        value:[]
    },
    reducers:{
        addProduct:(state , action)=>{
            state.value.push(action.payload)
        }
    }
})

export const {addProduct} = productSlice.actions

export default productSlice.reducer