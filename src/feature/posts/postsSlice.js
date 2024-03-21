import { createSlice, nanoid } from "@reduxjs/toolkit";
 

const initialState = [
  {
    id: 1,
    title: "Learning React",
    content: "It's easy",
 
  },
  {
    id: 2,
    title: "Learning Redux Toolkit",
    content: "Like and share video ",
 
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
 
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postsAdded } = postsSlice.actions;
export default postsSlice.reducer;
