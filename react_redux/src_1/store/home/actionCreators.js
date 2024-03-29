import * as actionTypes from "./constants"
import axios from "axios"

export const changeBannerAction = (banners) => ({
    type: actionTypes.CHANGE_BANNERS,
    banners
})

export const fetchHomeMultidataAction = () => {

    return (dispatch, getState) => {
        axios.get("").then(res => {
            const banners = res.data.data
            dispatch(changeBannerAction(banners))
        })
    }
}