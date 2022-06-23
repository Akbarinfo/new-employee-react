import { createSlice } from "@reduxjs/toolkit";

const newPost = createSlice({
  name: 'post',
  initialState: {
    addopen: false,
  },

  reducers: {
    openModal(state, action) {
      state.addopen = ! action.payload.addopen
    }
  }
})

export const postActions = newPost.actions
export default newPost.reducer;