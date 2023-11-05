import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes/router.jsx";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/store/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={3000}
        width={100}
      />
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
