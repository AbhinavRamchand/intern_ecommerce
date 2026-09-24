import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import type { CartItem, Product } from "../Data/Product";



function Layout() {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [cartOpen, setCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const [wishlist, setWishlist] = useState<Product[]>(() => {
        const savedWishlist = localStorage.getItem("wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const saveMode = localStorage.getItem("darkMode")
        return saveMode === "true"
    });

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode])



    const toggleDarkMode = () => {
        setDarkMode((currentMode) => !currentMode);
    }


    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToCart = (product: Product, quantity: number) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.id === product.id);

            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity, price: (item.quantity + quantity) * product.price }
                        : item);
            }

            return [
                ...currentItems,
                {
                    ...product,
                    quantity: quantity,
                    price: product.price * quantity

                }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== productId)
        );
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const toggleWishlist = (product: Product) => {
        setWishlist((currentWishlist) => {
            const alreadyExists = currentWishlist.some((item) => item.id === product.id);
            if (alreadyExists) {
                return currentWishlist.filter((item) => item.id !== product.id);
            }

            return [
                ...currentWishlist,
                product
            ];
        });
    }


    return (
        <div className="flex flex-col min-h-screen">
            <NavBar cartCount={cartCount} cartItems={cartItems} cartOpen={cartOpen} setCartOpen={setCartOpen}
                removeFromCart={removeFromCart} wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart}
                searchTerm={searchTerm} setSearchTerm={setSearchTerm} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className="flex-1 pt-16">
                <Outlet context={{ addToCart, wishlist, toggleWishlist, searchTerm, darkMode }} />

                <Footer darkMode={darkMode} />

            </div>
        </div>
    )
}

export default Layout;