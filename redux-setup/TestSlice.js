const { createSlice } = require("@reduxjs/toolkit")


const initialState={
    temp:'temp'
}

const TestSlice= createSlice({
    name:'TestSlice',
    initialState,
    reducers:{
        showConsole:(state,action)=>{
            console.log('Payload is:',action.payload)
            state.temp=action.payload
        }
    }
})
export const {showConsole}=TestSlice.actions
export default TestSlice.reducer