import {
  LayoutDashboard,
  ShoppingCart,
  LayoutGrid,
} from "lucide-react";

import { NavLink } from "react-router-dom";

interface sidebarProps {
  sideBarOpen: boolean;
  darkMode: boolean;
 
}
function Sidebar({ sideBarOpen, darkMode }: sidebarProps) {

  return (

    <aside className={` ${sideBarOpen ? "w-64" : "w-20"} h-250 ${darkMode ? "bg-black " : " bg-[#EAE9E5]"}  px-6 py-4`}>

      <div className="mb-10">
        {sideBarOpen ? (
          <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
            <span className="text-xl text-[#7E6A5A]">C</span>urate
          </h2>) : (<span className="text-2xl font-bold text-[#7E6A5A]">C</span>)
        }

      </div>


      <div className="space-y-2">

        {sideBarOpen ? (
          <NavLink to="/dashboard" className={({ isActive }) =>
            `flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left
    ${isActive ? darkMode ? "bg-[#242424] text-white" : "bg-[#EAE9E5] text-[#7E6A5A]" : darkMode ? "text-gray-400 hover:bg-[#242424]"
              : "text-gray-800 hover:bg-gray-100"
            }`
          }>
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>) : (
          <NavLink to="/dashboard" className={({ isActive }) => `p-2 rounded-lg ${ isActive ? darkMode ? "bg-[#242424] text-white"
          : "bg-[#EAE9E5] text-[#7E6A5A]"  : darkMode   ? "text-gray-300" : "text-gray-700" }` }>
            <LayoutDashboard size={20} /></NavLink>)
        }

        {sideBarOpen ? (
          <NavLink to="/customers" className={({ isActive }) =>
            `flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left
    ${isActive ? darkMode ? "bg-[#242424] text-white" : "bg-[#EAE9E5] text-[#7E6A5A]" : darkMode ? "text-gray-400 hover:bg-[#242424]"
              : "text-gray-800 hover:bg-gray-100"
            }`
          }>
            <ShoppingCart size={20} />
            Customer
          </NavLink>) : (<NavLink to="/customers" className={({ isActive }) =>
    `p-2 rounded-lg ${
      isActive
        ? darkMode
          ? "bg-[#242424] text-white"
          : "bg-[#EAE9E5] text-[#7E6A5A]"
        : darkMode
          ? "text-gray-300"
          : "text-gray-700"
    }`
  }><ShoppingCart size={20} /></NavLink>)
        }
        {sideBarOpen ? (
          <NavLink to="/categories" className={({ isActive }) =>
            `flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left
    ${isActive ? darkMode ? "bg-[#242424] text-white" : "bg-[#EAE9E5] text-[#7E6A5A]" : darkMode ? "text-gray-400 hover:bg-[#242424]"
              : "text-gray-800 hover:bg-gray-100"
            }`
          }>
            <LayoutGrid size={20} />
            Categories
          </NavLink>) : (<NavLink to="/categories" className={({ isActive }) =>
    `p-2 rounded-lg ${
      isActive
        ? darkMode
          ? "bg-[#242424] text-white"
          : "bg-[#EAE9E5] text-[#7E6A5A]"
        : darkMode
          ? "text-gray-300"
          : "text-gray-700"
    }`
  }> <LayoutGrid size={20} /></NavLink>)
        }

      </div>
    </aside>


  );

}


export default Sidebar;