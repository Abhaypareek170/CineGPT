import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/browse" element={<h1>Browse</h1>} />
          <Route path="/browse/:id" element={<h1>Browse</h1>} />
          <Route path="/browse/:id/:movieId" element={<h1>Browse</h1>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
