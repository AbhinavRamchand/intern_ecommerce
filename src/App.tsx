import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import About from './Pages/About'
import Shop from './Pages/Shop'

import Trends from './Pages/Trends'
import Blog from './Pages/Blog'
import Signup from './Pages/Signup';
import Payoption from './Components/payoption';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/login" element={<Login />} />
     <Route path="/" element={<Signup/>}/>

   <Route element ={<Layout />}>
    <Route path="/home" element={<Home />} />
    <Route path="/shop" element={<Shop/> } />
    <Route path="/about" element={<About />} />
    <Route path="/trends" element={<Trends />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/payoption" element={<Payoption />} />

   </Route>
  
   </Routes>
   </BrowserRouter>
  )
}

export default App

