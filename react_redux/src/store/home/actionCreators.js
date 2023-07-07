import * as actionTypes from "./constants"
import axios from "axios"

export const changeBannerAction = (banners) => ({
    type: actionTypes.CHANGE_BANNERS,
    banners
})

export const fetchHomeMultidataAction = () => {

    return (dispatch, getState) => {
        axios.get("http://127.0.0.1:4523/m1/2964940-0-default/banner").then(res => {
            const banners = res.data.data
            dispatch(changeBannerAction(banners))
        })

    }

}