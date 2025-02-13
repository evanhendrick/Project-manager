import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const boardsUrl = "http://localhost:8000/boards"
const boardUrl = 'http://localhost:8000/board'

export const fetchBoards = createAsyncThunk('board/fetchBoards', async () => {
  try {
    const response = await axios.get(boardsUrl)
    return response.data
  } catch (err){
    console.log(err)
  }
})

export const fetchBoard = createAsyncThunk('board/fetchBoard', async () => {
  try{
    // send over the id here
    const response = await axios.get(`${boardUrl}`)
    return response.data
  } catch (err) {
    console.log(err)
  }
})

const boardSlice = createSlice({
  name:'board',
  // initialState: {
  //   projects: [],
  //   project: {},

  // },
  initialState: {
    boards: [],
    board: {}
  },
  reducers: {
    // synchronous functions if needed
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchBoards.fulfilled, (state, action) => {
      console.log("action.payload >", action.payload)
      // we are setting project to what is actually the board here
      state.boards = action.payload
    })
    .addCase(fetchBoard.fulfilled, (state, action) => {
      console.log("fetch single board action payload", action.payload)
      state.board = action.payload
    })
  }
})

export default boardSlice.reducer;