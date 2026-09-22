import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import type { CartItem, Product } from "../Data/Product";
import { Link } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';


interface NavBarProps {
    cartCount: number;
    cartItems: CartItem[];
    cartOpen: boolean;
    setCartOpen: (value: boolean) => void;
    removeFromCart: (productId: number) => void;
    wishlist: Product[];
    toggleWishlist: (product: Product) => void;
    addToCart: (product: Product, quantity: number) => void;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

function NavBar({ cartCount, cartItems, cartOpen, setCartOpen, removeFromCart, wishlist,
    toggleWishlist, addToCart, searchTerm, setSearchTerm }
    : NavBarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [cartMessage, setCartMessage] = useState(false);

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-16 z-50 flex justify-between items-center px-5
         md:px-7 shadow-sm bg-[#EAE9E5]">

                <div className="flex md:gap-[50px] lg:gap-[80px] items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-[#7E6A5A]">C<span className=" text-black">URATE</span></h1>
                    </div>
                    <div className="hidden md:flex md:gap-5 lg:gap-7">
                        <NavLink to="/home" className={({ isActive }) => `md:text-[13px] lg:text-[15px]
                         font-medium hover:text-[#5C4D42] ${isActive ? "text-[#5C4D42]" : ""}`}>Home</NavLink>
                        <NavLink to="/shop" className={({ isActive }) => `md:text-[13px] lg:text-[15px] 
                        font-medium hover:text-[#5C4D42] ${isActive ? "text-[#5C4D42]" : ""}`}>Shop</NavLink>
                        <NavLink to="/trends" className={({ isActive }) => `md:text-[13px] lg:text-[15px]
                         font-medium hover:text-[#5C4D42] ${isActive ? "text-[#5C4D42]" : ""}`}>Trends</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => `md:text-[13px] lg:text-[15px]
                         font-medium hover:text-[#5C4D42] ${isActive ? "text-[#5C4D42]" : ""}`}>Blog</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `md:text-[13px] lg:text-[15px]
                         font-medium hover:text-[#5C4D42] ${isActive ? "text-[#5C4D42]" : ""}`}>About</NavLink>

                    </div>
                </div>

                <div className="flex gap-7 md:gap-5 items-center">
                    <div className="hidden md:flex border border-gray-400 rounded-md px-2 py-1 gap-2 w-[180px] items-center">
                        <SearchIcon fontSize="small" className="text-gray-400" />
                        <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                            className=" placeholder:text-[13px] focus:outline-none" />
                    </div>

                    <button onClick={() => setCartOpen(true)} className="relative cursor-pointer">
                        <ShoppingCartIcon fontSize="medium" className="text-black" />

                        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center bg-[#B5A69A] text-[11px] 
                    font-sm text-white hover:bg-[#7E6A5A]"> {cartCount}  </span>
                    </button>

                    <button onClick={() => setWishlistOpen(true)} className="relative cursor-pointer">
                        <FavoriteBorderIcon fontSize="medium" className="text-black" />
                        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center
                            justify-center bg-[#B5A69A] text-[11px] font-sm text-white hover:bg-[#7E6A5A]">{wishlist.length}</span>

                    </button>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
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

            {cartOpen && (
                <div className="fixed inset-0 z-[100]">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setCartOpen(false)}></div>


                    <div className="absolute right-0 top-0 h-full w-[280px] md:w-[350px] bg-white shadow-xl px-7
                     md:px-10 py-7 overflow-y-auto">

                        <div className="flex items-center justify-between">
                            <h2 className="font-bold text-[#7E6A5A] text-md md:text-xl font-mono">Your Cart</h2>
                            <button onClick={() => setCartOpen(false)} className="cursor-pointer">
                                <CloseIcon className="text-gray-500 hover:text-black transition duration-300" /> </button>
                        </div>

                        <div className="mt-10">
                            {cartItems.length === 0 ? (
                                <p className="text-center mx-5 py-2 bg-[#DFDDD8] font-semibold animate__animated animate__pulse">
                                    Your cart is empty</p>) :
                                (
                                    <div className="flex flex-col gap-5">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex gap-5 border-b border-gray-400 pb-4">

                                                <img src={item.image} alt={item.name} className="h-20 w-16 object-contain" />

                                                <div className="flex flex-1 flex-col">
                                                    <h3 className="text-[11px] md:text-sm font-medium text-[#7E6A5A]"> {item.name} </h3>
                                                    <p className="text-sm text-gray-500 my-1">&#8377;{item.price}</p>
                                                    <p className="text-sm text-gray-500"> Quantity: {item.quantity}
                                                    </p>
                                                    <div className="flex gap-2 mt-3 md:gap-5 ">
                                                        <button onClick={() => removeFromCart(item.id)} className="text-xs
                                                   border border-gray-400 px-2 py-1 rounded-sm font-bold 
                                                  hover:bg-gray-100 transition duration-300 hover:scale-105">
                                                            Remove  </button>

                                                        <Link to="/payoption" onClick={() => setCartOpen(false)} className="text-xs px-2 py-1 rounded-sm font-bold 
                                                  bg-[#5a4a3a] text-white transition duration-300 hover:scale-105 text-nowrap">
                                                            Buy Now </Link>
                                                    </div>

                                                </div>

                                            </div>

                                        ))}
                                    </div>
                                )}

                        </div>

                    </div>

                </div>
            )}

            {wishlistOpen && (
                <div className="fixed inset-0 z-[100]">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setWishlistOpen(false)}
                    ></div>

                    <div className="absolute right-0 top-0 h-full w-[280px] md:w-[350px] bg-white shadow-xl
                     px-7 md:px-10 py-7 overflow-y-auto ">
                        <div className="flex items-center justify-between">

                            <h2 className="font-bold text-[#7E6A5A] text-md md:text-xl font-mono">
                                Your Wishlist</h2>

                            <button onClick={() => setWishlistOpen(false)} className="cursor-pointer">
                                <CloseIcon className="text-gray-500 hover:text-black transition duration-300" />
                            </button>

                        </div>

                        <div className="mt-10">
                            {wishlist.length === 0 ? (<p className="text-center mx-5 py-2 bg-[#DFDDD8] font-semibold animate__animated animate__pulse">
                                Your wishlist is empty</p>) : (
                                <div className="flex flex-col gap-5">

                                    {wishlist.map((item) => (
                                        <div key={item.id} className="flex gap-5 border-b border-gray-400 pb-4">

                                            <img src={item.image} alt={item.name} className="h-20 w-16 object-contain" />

                                            <div className="flex flex-1 flex-col">
                                                <h3 className="text-[11px] md:text-sm font-medium text-[#7E6A5A]">{item.name}
                                                </h3>

                                                <p className="text-sm text-gray-500 my-1">&#8377;{item.price} </p>

                                                <div className="flex flex-col gap-3">
                                                    <div className="flex gap-1  mt-3 md:gap-2">

                                                        <button onClick={() => toggleWishlist(item)} className="text-xs border 
                                                    border-gray-400 px-2 py-1 rounded-sm hover:scale-105                                                     
                                                        font-bold hover:bg-gray-100 transition duration-300">Remove</button>

                                                        <button onClick={() => {
                                                            addToCart(item, 1);
                                                            setCartMessage(true);

                                                            setTimeout(() => {
                                                                setCartMessage(false);
                                                            }, 2000);
                                                        }} className="text-xs border 
                                                    border-gray-400 px-2 py-1 rounded-sm hover:scale-105                                                     
                                                        font-bold hover:bg-gray-100 transition duration-300 text-nowrap">Add to cart</button>

                                                    </div>


                                                    <Link to="/payoption" onClick={() => setWishlistOpen(false)} className="text-xs px-2 py-1 rounded-sm font-bold bg-[#5a4a3a]                                                        
                                                        text-white  transition duration-300 hover:scale-105  text-nowrap text-center w-[150px] ">
                                                        Buy Now
                                                    </Link>

                                                </div>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            )}

                        </div>

                    </div>
                </div>
            )}

            {cartMessage && (
                <div className="fixed top-20 right-5 z-[200] bg-white shadow-lg px-3 py-2 rounded-md flex items-center justify-center">
                    <p className="text-[11px] md:text-[13px] font-semibold text-gray-800">
                        <CheckIcon fontSize="small" /> Product added to cart
                    </p>
                </div>
            )}

        </>


    )
}

export default NavBar;