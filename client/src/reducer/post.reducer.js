import { ADD_POSTS, GET_POSTS } from "../action/post.action";

const initialState = {};
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POSTS:
      return [...state, action.payload];
    default:
      return state;
  }
}
