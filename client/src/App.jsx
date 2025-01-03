
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/Login'
import Register from './component/Register'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
