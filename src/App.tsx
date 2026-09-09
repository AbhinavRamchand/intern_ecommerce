
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import About from './Pages/About'
import Shop from './Pages/Shop'

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path="/login" element={<Login />} />

   <Route element ={<Layout />}>
    <Route path="/home" element={<Home />} />
    <Route path="/shop" element={<Shop/> } />
    <Route path="/about" element={<About />} />

   </Route>
   

   </Routes>
   </BrowserRouter>
  )
}

export default App
