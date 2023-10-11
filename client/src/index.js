import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { getPosts } from "./action/post.action";
import { getUser } from "./action/user.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getPosts());
store.dispatch(getUser());

const root = document.getElementById("root");
const appRoot = createRoot("root");

appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
