import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import axios from "axios";

export const getBannerData = createAsyncThunk(
    "home/getBannerData",
    async () => {
        // const response = await axios.get('http://123.207.32.32:8000/home/multidata')
        const response = await axios.get('/banner.json')
        return response.data
    }
)

const counterSlice = createSlice({
    name: "home",
    initialState: {
        furn: [],
        banner: [],
        
    },
    reducers: {
        changeFurn(state, { payload }) {
            // state.furn = payload
        },
        changeBanner(state, { payload }) {
            state.banner = payload || []
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getBannerData.fulfilled, (state, { payload }) => {
            console.log('fulfilled',payload);
            state.banner = payload.banners
        })
    }
    // extraReducers: {
    //     [getBannerData.fulfilled]: (state, { payload }) => {
    //         console.log('fulfilled',payload);
    //         state.banner = payload.banners
    //     },
    // }
})

export const { changeFurn, changeBanner } = counterSlice.actions

export default counterSlice.reducer