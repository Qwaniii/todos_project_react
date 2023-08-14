import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./reducers/taskReducer"

const store = configureStore({
  reducer: {
    task: taskSlice,
  }
})

export default store