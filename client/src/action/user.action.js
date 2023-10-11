import axios from "axios";
export const GET_USERS = "GET_USERS";

export const getUser = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/users").then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    });
  };
};
