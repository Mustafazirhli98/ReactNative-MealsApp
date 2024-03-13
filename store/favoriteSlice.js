import { createSlice } from "@reduxjs/toolkit"
import { Alert } from "react-native"
import AlertTEXT from "../constants/AlertTexts"

const initialState = {
    favoritesList: []
}

const favoriteSlice = createSlice({
    name: "favoriteSlice",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favoritesList.push(action.payload)
            console.log(state.favoritesList)
        },
        removeFavorite: (state, action) => {
            state.favoritesList.splice(state.favoritesList.indexOf(action.payload), 1)
        },
        deleteAllFavorites: (state) => {
            state.favoritesList = []
        },
    }
})

export const { addFavorite, removeFavorite, deleteAllFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer