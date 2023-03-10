import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState{
    Login:string;
}
const initialState:UserState={
    Login:''
}
export const userSlice=createSlice({
    name:'user',
    initialState, 
    reducers:{
addUser:(state, action:PayloadAction<string>)=>{
state.Login=action.payload
}
    }
})

export const {addUser}=userSlice.actions

export default userSlice.reducer