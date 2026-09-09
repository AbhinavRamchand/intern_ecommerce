import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className="fixed top-0 left-0 w-full h-16 z-50 flex justify-between items-center px-5
         md:px-7 shadow-sm bg-[#EAE9E5]">

            <div className="flex md:gap-[50px] lg:gap-[80px] items-center">
                <div>
                    <h1 className="text-3xl font-bold text-[#7E6A5A]">C<span className=" text-black">URATE</span></h1>
                </div>
                <div className="hidden md:flex gap-7">
                    <NavLink to="/home" className={({ isActive }) => `font-medium hover:text-[#5C4D42] ${isActive ? "text-[#5C4D42]" : ""}`}>Home</NavLink>
                    <NavLink to="/shop" className={({ isActive }) => `font-medium hover:text-[#5C4D42] ${isActive ? "text-[#5C4D42]" : ""}`}>Shop</NavLink>
                    <NavLink to="/trends" className={({ isActive }) => `font-medium hover:text-[#5C4D42] ${isActive ? "text-[#5C4D42]" : ""}`}>Trends</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => `font-medium hover:text-[#5C4D42] ${isActive ? "text-[#5C4D42]" : ""}`}>Blog</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `font-medium hover:text-[#5C4D42] ${isActive ? "text-[#5C4D42]" : ""}`}>About</NavLink>

                </div>
            </div>

            <div className="flex gap-7 md:gap-5 items-center">
                <div className="hidden md:flex border border-gray-400 rounded-md px-2 py-1 gap-2 w-[180px] items-center">
                    <SearchIcon fontSize="small" className="text-gray-400" />
                    <input type="text" placeholder="Search" className=" placeholder:text-[13px] focus:outline-none" />
                </div>

                <div className="relative">
                    <ShoppingCartIcon fontSize="medium" className="text-black" />
                    <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center  
                            justify-center bg-[#B5A69A] text-[11px] font-sm text-white hover:bg-[#7E6A5A]">2</span>


                </div>
                <div className="relative">
                    <FavoriteBorderIcon fontSize="medium" className="text-black" />
                    <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center
                            justify-center bg-[#B5A69A] text-[11px] font-sm text-white hover:bg-[#7E6A5A]">0</span>

                </div>

                <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden">
                    {menuOpen? <CloseIcon /> : <MenuIcon />}
                    </button>


            </div>

        </div>

        {menuOpen && (
            <div className="fixed top-16 left-0 w-full z-40 bg-[#EAE9E5] shadow-md md:hidden">
                <div className="flex flex-col px-7 py-4 gap-2">
                    <NavLink to="/home" onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-medium text-sm hover:text-[#5C4D42] hover:bg-[#F5F5F5] py-2 px-4 rounded-md
                    ${isActive ? "text-[#5C4D42]" : ""}`}>Home</NavLink>
                    <NavLink to="/shop" onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-medium text-sm hover:text-[#5C4D42] hover:bg-[#F5F5F5] py-2 px-4 rounded-md
                    ${isActive ? "text-[#5C4D42]" : ""}`}>Shop</NavLink>
                    <NavLink to="/trends" onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-medium text-sm hover:text-[#5C4D42] hover:bg-[#F5F5F5] py-2 px-4 rounded-md
                    ${isActive ? "text-[#5C4D42]" : ""}`}>Trends</NavLink>
                    <NavLink to="/blog" onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-medium text-sm hover:text-[#5C4D42]   hover:bg-[#F5F5F5] py-2 px-4 rounded-md
                    ${isActive ? "text-[#5C4D42]" : ""}`}>Blog</NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-medium text-sm hover:text-[#5C4D42] hover:bg-[#F5F5F5] py-2 px-4 rounded-md
                    ${isActive ? "text-[#5C4D42]" : ""}`}>About</NavLink>
                </div>
            </div>
        )}


        </>

        
    )
}

export default NavBar;