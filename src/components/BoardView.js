import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBoard } from "../app/slices/boardSlice";

// this board is our container with all of our projects rendered inside of it

const _ = require('lodash')

// 
const BoardView = () => {
  // const [id, setId] = useState()
  const dispatch = useDispatch()
    
  const boards = useSelector((state) => {
    return state.storeBoards.boards
  })
  console.log("BoardView boards", boards)

  if(!_.isEmpty(boards)){
    return (
      <div>
        Got our new boards
        <p
        onClick={() => {dispatch(fetchBoard(boards[0]._id))}}
        >
        {boards[0].name}
        </p>
        <div>
          {boards[2].projects.map((proj) => {
            return <p key={proj}>Project name: {proj}</p>
          })}
        </div>
        {/* render projects here */}
      </div>
    )
  } else {
    return (
      <div>
      This is our board view
    </div>
  )
}
}

export default BoardView