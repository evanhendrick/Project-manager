import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBoards, fetchBoard } from './app/slices/boardSlice';
import BoardView from './components/BoardView';

const _ = require('lodash')

// we will have our board as the main component

function App() {
  const dispatch = useDispatch()
  const boards = useSelector((state) => {
    console.log("redux state", state.storeBoards.boards)
    return state.storeBoards.boards
  })

  if(!_.isEmpty(boards)){
    return (
      <div>
        <div> Here are all of the boards</div>
        <ul>
        {boards.map((b) => {
          return <li key={b._id}>{b.name}</li>
        })}
        </ul>
        <BoardView />
      </div>
    )
  } else {
    return (
      <div>
        <div>no boards yet</div>
        <button
      onClick={() => {
        dispatch(fetchBoards())
      }}
      >
        make call to backend
      </button>
      </div>
    )
  }

  console.log("boards", boards)
  return (
    <div className="App">
      
      <p>{boards.boards}</p>
      
      
      <button
      onClick={() => {
        dispatch(fetchBoard())
      }}
      >fetch a single board</button>

    </div>
  );
}

export default App;
