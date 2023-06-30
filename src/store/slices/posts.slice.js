import { createSlice } from "@reduxjs/toolkit";
import blogApi from "../../api/blog";
import axios from "axios";

const postsSlice = createSlice({
  name: "posts",
  initialState: null,
  reducers: {
    setPost: (state, action) => action.payload,
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
  },
});

export const { setPost, addPost } = postsSlice.actions;

export default postsSlice.reducer;

export const getAllPostThunk = () => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  axios
    .get("http://localhost:3000/api/v1/posts", { headers })
    .then((res) => dispatch(setPost(res.data)))
    .catch((err) => {
      console.log(err);
    });
};
