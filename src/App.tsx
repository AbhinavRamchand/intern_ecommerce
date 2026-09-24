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
      import Adminlayout from './Adminpanel.tsx/Adminlayout'
      import Dashboard from './Adminpanel.tsx/Dashboard'
       function App() {
         return (
           <BrowserRouter> 
         <Routes>
           <Route path="/login" element={<Login />} />
            <Route path="/" element={<Signup/>}/>

            <Route path="/Adminlayout" element={<Adminlayout/>}>
            <Route path="Dashboard" element={<Dashboard/>}/>
            </Route>

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
                  ) ;
                 }
 export default App;
