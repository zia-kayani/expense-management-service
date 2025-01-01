import './App.css';
import Login from './components/Login';
import Register from './components/Register';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className='w-full h-full flex justify-center items-center'>
    //   <Register />

    // </div>

    <Router>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;
