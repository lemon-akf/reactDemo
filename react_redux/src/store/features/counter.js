import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 999
    },
    reducers: {
        addNumber(state, { payload}) {
            state.counter += payload
        },
        subNumber(state, { payload}) {
            state.counter -= payload
        }
    }
})

export const { addNumber, subNumber } = counterSlice.actions // 导出action

export default counterSlice.reducer