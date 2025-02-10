import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'

import Signup from './components/Signup'
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Home' element={<Home/>} />
          <Route path="*" element={<Navigate to="/Login" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
