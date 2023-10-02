import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'


function App() {
  return (
    <>
    <div>
        <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path='/Home' component={<Home />} />
              {/* <Route path='Login' element={<Login />} />
              <Route path='ProfilePage' element={<ProfilePage />} />
              <Route path='Category' element={<Category/>} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;