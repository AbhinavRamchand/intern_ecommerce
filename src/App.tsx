//import Payoption from './payoption';
import Trends from './Trends'
import Blog from './Blog'
import { Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Payoption from './payoption';

function App() {
  return (
    
    //<Signup/>
      //<Trends/>
    //<Blog/>
    //<Payoption/>

     
      <Routes>
         <Route path="/" element={<Signup/>}/>

         <Route path="/Trends" element={
          <>
         <Trends/>
          <Blog/>
          <Payoption/>

          </>
        }/>
        
        </Routes>
      

  )
}

export default App;
