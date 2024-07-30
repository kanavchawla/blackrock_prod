import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducer";
const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
