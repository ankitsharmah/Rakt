import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name:"auth",
    initialState:{
        sginUpData:null,
        token:localStorage.getItem("token")
    },
    reducers:{
        setSignUpData(state,action){
            console.log(action.payload)
                state.sginUpData=action.payload
        }
    }
    
})

export const {setSignUpData} = authSlice.actions;
export default authSlice.reducer; 