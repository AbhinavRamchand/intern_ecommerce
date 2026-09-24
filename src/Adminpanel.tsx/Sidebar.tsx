import {
  LayoutDashboard,
  ShoppingCart,
  LayoutGrid,
} from "lucide-react";
import { Link } from "react-router-dom";

  interface sidebarProps{
     sideBarOpen: boolean;
       darkMode: boolean;
  }
function Sidebar({sideBarOpen,darkMode}:sidebarProps) {

  return (
    
    <aside className={` ${sideBarOpen?"w-64":"w-20"} h-250 ${darkMode?"bg-black ": " bg-[#EAE9E5]"}  px-6 py-4`}>

      <div className="mb-10">
        {sideBarOpen?(
        <h2 className={`text-2xl font-bold ${darkMode?"text-white":  "text-gray-800"}`}>
          <span className="text-xl text-[#7E6A5A]">C</span>urate
        </h2>):(<span className="text-2xl font-bold text-[#7E6A5A]">C</span>)
}
      
      </div>

     
      <div className="space-y-2">

        {sideBarOpen?(
        <Link to="./dashboard" className={`flex w-full items-center gap-3 rounded-lg ${darkMode?"text-white":  "text-gray-800"}  px-4 py-3 text-left `}>
          <LayoutDashboard size={20} />
          Dashboard
        </Link>):(
          <div className="p-2 text-gray-700 "><LayoutDashboard  size={20} /></div>)
}

         {sideBarOpen?(
        <Link to="./customers" className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left ${darkMode?"text-white":  "text-gray-800"} `}>
          <ShoppingCart size={20} />
          Customer
        </Link>):(<div className="p-2 text-gray-700 "><ShoppingCart size={20} /></div>)
}
         {sideBarOpen?(
        <Link to="./categories" className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left ${darkMode?"text-white":  "text-gray-800"} `}>
          <LayoutGrid size={20} />
          Categories
        </Link>):( <div className="p-2 text-gray-700 "> <LayoutGrid  size={20} /></div>)
}

     </div>
     </aside>
    
     
  );

}


export default Sidebar;