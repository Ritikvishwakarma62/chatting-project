import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

let API = "http://localhost:8080/message"

let getAll = createAsyncThunk("all",async()=>{
    let res = await axios.get(`${API}`)
    return res.data;
})

let add = createAsyncThunk("add",async(obj)=>{
    let res = await axios.post(`${API}`,obj)
    return res.data;
})


let messageSlice = createSlice({
    name : "message",
    initialState: [],
    extraReducers :buider=>{
        buider.addCase(getAll.fulfilled,(state,action)=>{
            return action.payload
        });
        buider.addCase(add.fulfilled,(state,action)=>{
            state.push(action.payload)
        })
    }
    
})

export default messageSlice.reducer
export {getAll,add}