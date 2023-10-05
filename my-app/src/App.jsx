import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
// import LogIn from './components/LogIn'


function App() {
  return (
    <>
    <div>
        <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path='Home' element={<Home />} />
              <Route path='Profile' element={<Profile />} />
              {/* <Route path='LogIn' element={<LogIn/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;