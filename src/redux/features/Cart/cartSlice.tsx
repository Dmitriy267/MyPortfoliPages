import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export  interface Cart{
id:number;
quantity:number;
title:string;
descript1:string;
descript2:string;
alt:string;
price:number;
image:string;

}
 interface CartState{
    cartShop:Cart[];
    totalPrice:number;
}
const initialState:CartState={
    cartShop:[],
    totalPrice:0
}

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
addProduct:(state, action:PayloadAction<{id:number, quantity:number; title:string, descript1:string, descript2:string, alt:string, price:number, image:string}>)=>{
const productInCart=state.cartShop.find((item)=>item.id===action.payload.id)
if(!productInCart){
    state.cartShop.push({
        id: action.payload.id,
        title: action.payload.title,
        quantity:1,
        descript1: action.payload.descript1,
        descript2: action.payload.descript2,
        alt: action.payload.alt,
        price: action.payload.price,
        image: action.payload.image
    })
   
    }
    state.totalPrice=state.cartShop.reduce((sum, myPrice)=>sum + myPrice.price, 0)  
},
removeProduct:(state, action:PayloadAction<{id:number, quantity:number}>)=>{
 const itemId= state.cartShop.findIndex((item)=>item.id===action.payload.id);
 state.cartShop.splice(itemId, 1);
 state.totalPrice=0;
 state.totalPrice=state.cartShop.reduce((sum, myPrice)=>sum + myPrice.price, 0)
}, 

    }
})

export const {addProduct, removeProduct}=cartSlice.actions;

export default cartSlice.reducer;