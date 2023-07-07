import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "home",
    initialState: {
        banners: []
    },
    reducers: {
        changeBannerAction(state, action) {

        }
    }
})

export default counterSlice.reducer