import { configureStore } from "@reduxjs/toolkit";
import newItem from "./newItem";

const store = configureStore({
  reducer:{post: newItem }
})

export default store;