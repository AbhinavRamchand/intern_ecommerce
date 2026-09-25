import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState,useEffect } from "react";

function Adminlayout() {

      const [sideBarOpen,setSideBarOpen]=useState<boolean>(true);
      const [menuBarOpen,setMenuBarOpen] = useState<boolean>(false);


 const [darkMode, setDarkMode] = useState<boolean>(() => {
        const saveMode = localStorage.getItem("darkMode")
        return saveMode === "true"
    });
    
    useEffect(() => 
      { localStorage.setItem("darkMode", String(darkMode)); }, [darkMode]);
      
  return (
    <div className="flex h-screen overflow-hidden">

      
      <div >
        <Sidebar darkMode={darkMode} sideBarOpen={sideBarOpen} menuBarOpen={menuBarOpen} setMenuBarOpen ={setMenuBarOpen} />
      </div>
     

     
      <div className="flex-1 flex flex-col h-full overflow-hidden">

        <header className="shrink-0 z-10">
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            sideBarOpen={sideBarOpen}
            setSideBarOpen={setSideBarOpen}
            menuBarOpen={menuBarOpen} setMenuBarOpen ={setMenuBarOpen}
          />
        </header>

   
      <main className="flex-1 min-h-0 overflow-y-auto">
          <Outlet context={{ darkMode }} />
        </main>

      </div>

    </div>
  );
}

export default Adminlayout;

