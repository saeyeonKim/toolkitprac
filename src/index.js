// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
// 1. configStore에 있는 우리가 만든 store를 가져와서
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* 2. root의 provider에 store를 넣어주는 과정이다. */}
    <App />
  </Provider>
);
// 3. 최상위 index.js에 provider에 store를 주입해주는 것은 redux-toolkit과 redux가 동일하다.
