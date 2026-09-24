import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import Adminlayout from './Adminpanel/Adminlayout'
import Dashboard from './Adminpanel/Dashboard'
import Categories from './Adminpanel/Categories'
import Customers from './Adminpanel/Customers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Adminlayout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/customers" element={<Customers />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
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

