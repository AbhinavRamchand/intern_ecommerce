import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import type { CartItem,Product } from "../Data/Product";

function Layout(){
    const [cartItems,setCartItems] = useState<CartItem[]>([]);
    const [cartOpen,setCartOpen] = useState(false);

    const addToCart=(product:Product, quantity:number) =>{
        setCartItems((currentItems)=>{
            const existingItem = currentItems.find((item)=>item.id ===product.id);

            if(existingItem){
                return currentItems.map((item)=>
                item.id ===product.id ? {...item,quantity:item.quantity+quantity}:item);
            }

            return [
                ...currentItems,
                {
                    ...product,
                    quantity:quantity
                }];

        });
    };

    const removeFromCart =(productId:number)=>{
        setCartItems((currentItems)=>
            currentItems.filter((item)=>item.id !==productId)
        );
    };

    const cartCount =cartItems.reduce((total,item)=>total + item.quantity,0);


    return (
        <div className="flex flex-col min-h-screen">
            <NavBar cartCount={cartCount} cartItems={cartItems} cartOpen={cartOpen} setCartOpen={setCartOpen}
                removeFromCart={removeFromCart}/>
            <div className="flex-1 pt-16">
                <Outlet context={{ addToCart}} />
            </div>
            <Footer />

            </div>
    )
}

export default Layout;