import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState,useEffect } from "react";

function Adminlayout() {

      const [sideBarOpen,setSideBarOpen]=useState<boolean>(true);

 const [darkMode, setDarkMode] = useState<boolean>(() => {
        const saveMode = localStorage.getItem("darkMode")
        return saveMode === "true"
    });
    
    useEffect(() => 
      { localStorage.setItem("darkMode", String(darkMode)); }, [darkMode]);
      
  return (
    <div className="flex min-h-screen">

      
      <div >
        <Sidebar darkMode={darkMode} sideBarOpen={sideBarOpen} />
      </div>
     

     
      <div className="flex-1">

        <div>
          <Navbar  darkMode={darkMode}  setDarkMode={setDarkMode} sideBarOpen={sideBarOpen}
          setSideBarOpen={setSideBarOpen}/>
        </div>

   
        <main>
          <Outlet context={{ darkMode }} />
        </main>

      </div>

    </div>
  );
}

export default Adminlayout;

