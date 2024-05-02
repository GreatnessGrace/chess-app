import './App.css'
// import { Chessboard } from "react-chessboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from './screens/Landing';

function App() {

  return (
    <>
    {/* <Chessboard id="BasicBoard" /> */}
    <div className='h-screen bg-slate-950'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App
