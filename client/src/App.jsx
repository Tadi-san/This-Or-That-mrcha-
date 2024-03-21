import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage';
import Category from './pages/category';
import { GamePage } from './pages/gamePage';
import axios from 'axios'
import Contribute from './pages/contribute';
function App() {

  // axios.defaults.baseURL = "http://localhost:5000"
  axios.defaults.baseURL = "https://this-or-that-mrcha.vercel.app/"
  axios.defaults.withCredentials = true
  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LandingPage />} />
          <Route path = "/category" element = {<Category />} />
          <Route path='/game/:subpage?' element = {<GamePage />} />
          <Route path='/contribute' element = {<Contribute />} />
</Routes>
    </BrowserRouter>
  )
}

export default App
