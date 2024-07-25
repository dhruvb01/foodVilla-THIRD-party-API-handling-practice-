import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
            console.log(state.items)
        },
        clearCart:(state)=>{
            state.items=[]
        },
        removeItem:(state,action)=>{
            
            const pre=state.items&&state.items.filter((card)=> card.info.id!==action.payload)
            state.items=[...pre]
        }
    }
})
export const {addItems,clearCart,removeItem}=cartSlice.actions
export default cartSlice.reducer