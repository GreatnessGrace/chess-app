import { useState } from 'react'
import './App.css'
// import Chessboard from './components/Game/Chessboard';
import { Chessboard } from "react-chessboard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Chess APP</h1>
    <Chessboard id="BasicBoard" />

    {/* <Chessboard></Chessboard> */}
    </>
  )
}

export default App
