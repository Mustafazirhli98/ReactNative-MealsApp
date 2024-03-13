import { createSlice } from "@reduxjs/toolkit"

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
        }
    }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer