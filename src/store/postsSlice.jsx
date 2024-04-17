import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPosts: []
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPosts: (state, action) => {
            state.allPosts = action.payload.allPosts
        },
        removePosts: (state) => {
            state.allPosts = []
        }
    }
})

export const { addPosts, removePosts } = postsSlice.actions

export default postsSlice.reducer