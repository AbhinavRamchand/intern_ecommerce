import {
   ArrowLeft,
   ArrowRight,
   
 } from "lucide-react";
 import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom"




interface NavbarProps{
  sideBarOpen:boolean;
    setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    darkMode:boolean;
    setDarkMode:React.Dispatch<React.SetStateAction<boolean>>;
}


function Navbar({sideBarOpen,setSideBarOpen,darkMode,setDarkMode}:NavbarProps){

  

    const navigate=useNavigate();

    return(
        <div className={`flex  justify-between p-2 ${darkMode?"bg-black text-white":  ""} `}>
           <button onClick={()=>{setSideBarOpen(!sideBarOpen)}}>
            {sideBarOpen?<ArrowLeft/>:<ArrowRight/>}
           </button>

            <div className="flex gap-2">

                <button
                        onClick={()=>{setDarkMode(!darkMode)}}
                        className={`cursor-pointer transition-colors ${
                            darkMode
                                ? "text-white"
                                : "text-gray-800"
                        }`}
                    >
                        {darkMode ? (
                            <LightModeIcon />
                        ) : (
                            <DarkModeIcon />
                        )}
                    </button>


            <Link to="/Home?from=admin"
                
                className="
                  bg-[#7E6A5A]
                 
                  px-2 sm:px-3
                  py-2
                  rounded-lg
                  text-white
                  text-sm sm:text-base
                  whitespace-nowrap
                "
              >
                UserView
              </Link>

              <button
                onClick={()=>navigate("/Login")}
                className={`
                  
                 ${darkMode?"bg-white text-black":  "text-white bg-black"}
                  px-2 sm:px-3
                  py-2
                  rounded-lg
                
                  text-sm sm:text-base
                  whitespace-nowrap
                `}
              >
                Logout
              </button>
              </div>
        </div>
    );
}
export default Navbar;
