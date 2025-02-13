import { configureStore } from "@reduxjs/toolkit"
import boardReducer from "../slices/boardSlice"

const store = configureStore({
  reducer: {
    storeBoards: boardReducer
  }
})

export default store