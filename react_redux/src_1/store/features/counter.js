import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 888
    },
    reducers: {
        addNumber(state, action) {
            console.log('addNumber',state);

        },
        subNumber(state, action) {
            console.log('subNumber',state);
        }
    }
})

export default counterSlice.reducer