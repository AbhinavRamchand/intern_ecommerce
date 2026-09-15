import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { products, type Product } from "../Data/Product";
import CloseIcon from '@mui/icons-material/Close';
import ScrollAnimation from "../Components/ScrollAnimation";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

type ShopContext = {
    addToCart: (product: Product, quantity: number) => void;
    wishlist: Product[];
    toggleWishlist: (product: Product) => void;
}

function Shop() {
    const { addToCart, wishlist, toggleWishlist } = useOutletContext<ShopContext>();

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const [quantity, setQuantity] = useState(1);
    const [showMessage, setShowMessage] = useState(false);


    const filteredProducts = selectedCategory === "all" ? products : products.filter(
        (product) => product.category === selectedCategory);


    const handleClick = (product: Product) => {
        setSelectedProduct(product);
        setQuantity(1);
    };

    const handleAddToCart = () => {

        if (!selectedProduct) return;

        addToCart(selectedProduct, quantity);

        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 2000);

    };

    return (
        <div className="p-10">
            <div className="flex gap-5 mb-5">

                <button onClick={() => setSelectedCategory("all")} className={`transition duration-300 hover:border-b ${selectedCategory === "all"
                    ? "border-b border-[#7E6A5A] text-[#7E6A5A]" : "text-gray-600 hover:text-[#7E6A5A]"}`}
                >All products</button>

                <button onClick={() => setSelectedCategory("women")} className={` transition duration-300 hover:border-b ${selectedCategory === "women"
                    ? "border-b border-[#7E6A5A] text-[#7E6A5A]" : "text-gray-600 hover:text-[#7E6A5A]"}`}
                >Women </button>

                <button onClick={() => setSelectedCategory("men")} className={`transition duration-300 hover:border-b ${selectedCategory === "men"
                    ? "border-b border-[#7E6A5A] text-[#7E6A5A]" : "text-gray-600 hover:text-[#7E6A5A]"}`}
                >Men</button>

            </div>


            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {filteredProducts.map((product) => (
                    <div key={product.id} className="flex flex-col">

                        <ScrollAnimation animation="animate__fadeIn" speed="slow">

                            <div className="relative group overflow-hidden w-full aspect-[3/4]">
                                <img src={product.image} alt={product.name}
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105" />

                                <button onClick={() => toggleWishlist(product)} className="absolute top-3 right-3 z-20
                                 transition duration-300 hover:scale-110">
                                    {wishlist.some((item) => item.id === product.id) ? (
                                        <FavoriteIcon fontSize="small" className="text-red-800"></FavoriteIcon>) : (
                                        <FavoriteBorderIcon fontSize="small" className="text-gray-400 hover:text-red-800" />
                                    )}
                                </button>


                                {product.badge && (
                                    <span className="absolute top-10 left-0 bg-[#7E6A5A] text-white text-[11px] font-medium px-3 py-1 z-10 ">
                                        {product.badge}</span>
                                )}

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-full opacity-0
                                 group-hover:opacity-100
                             transition duration-300 group-hover:translate-y-0 ease-in-out">

                                    <button onClick={() => handleClick(product)} className="px-5 py-3  bg-[#7E6A5A] text-[12px] font-medium
                                  text-white transition duration-300 hover:bg-white/99 hover:text-[#5C4D42] whitespace-nowrap">
                                        QUICK OVERVIEW
                                    </button>
                                </div>

                            </div>

                            <div className="mt-3 flex flex-col items-center justify-center">
                                <h2 className="text-[14px] font-medium text-gray-600">{product.name}</h2>
                                <div className="flex items-center gap-3">
                                    <p className=" text-gray-600">&#8377;{product.price}</p>
                                    <span className="text-sm text-gray-400 line-through">&#8377;{product.originalPrice}</span>
                                </div>

                            </div>

                        </ScrollAnimation>
                    </div>
                ))}


            </div>


            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 overflow-y-auto p-2 sm:p-4"
                    onClick={() => setSelectedProduct(null)}>

                    <ScrollAnimation animation="animate__slideInUp">
                        <div className="relative w-full max-w-5xl mx-auto mt-2 sm:mt-5 md:mt-[50px] bg-white 
                        px-8 py-6 sm:px-6 sm:py-8 md:p-10 min-h-0"
                            onClick={(e) => e.stopPropagation()}>

                            <button onClick={() => setSelectedProduct(null)} className="absolute right-4 top-3 mb-5">
                                <CloseIcon className="text-gray-500 hover:text-black " />
                            </button>


                            <div className="flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-[50px] pt-4 md:pt-0">

                                <img src={selectedProduct.image} alt={selectedProduct.name}
                                    className="w-full md:w-[45%] max-h-[350px] sm:max-h-[450px] md:max-h-[600px] object-cover">
                                    </img>

                                <div className="flex flex-col w-full md:w-[55%] mx-0  lg:mx-10 my-2 md:my-[55px] gap-2">
                                    <h1 className="text-[13px] text-gray-600 md:text-2xl font-bold">{selectedProduct.name}</h1>
                                    {selectedProduct.badge && (
                                        <p className="px-2 py-1 font-bold text-[11px] bg-green-700 text-white w-fit rounded-sm">
                                            {selectedProduct.badge}</p>
                                    )}

                                    <div className="flex flex-row gap-2 md:gap-3">
                                        <div className="flex items-center">
                                            <ArrowDownwardIcon className="text-green-800" />
                                            <span className="text-sm md:text-xl text-green-800 font-bold">{Math.round(
                                                ((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)}
                                                %</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-sm md:text-lg">&#8377;{selectedProduct.price}</span>
                                            <span className="text-[11px] md:text-[14px] text-gray-400 line-through">
                                                &#8377;{selectedProduct.originalPrice}</span>

                                        </div>

                                    </div>


                                    <p className="text-gray-500 my-5 text-[12px] sm:text-[18px] md:text-lg">{selectedProduct.description}</p>

                                    <div className="flex items-center gap-4">
                                        <button className="border px-3 py-1" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}> -</button>
                                        <span>{quantity}</span>
                                        <button className="border px-3 py-1" onClick={() => setQuantity(quantity + 1)}> +</button>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-3 gap-3 lg:gap-5 mt-5">
                                        <button onClick={handleAddToCart} className="px-2 py-2  md:px-8 md:py-2 bg-[#EAE9E5] text-[11px] 
                                        md:text-base text-black hover:bg-[#D8D5CF] w-full sm:w-[180px]
                                 transition duration-300  hover:scale-105 cursor-pointer"><ShoppingCartIcon fontSize="small" className="mr-1" />
                                            Add to cart</button>

                                        <button className="px-2 py-2 w-[90%] w-full sm:w-[180px]  md:px-8 md:py-2 bg-[#7E6A5A] 
                                        text-[11px] 
                                        md:text-base  text-white hover:bg-[#5a4a3a]
                                 transition duration-300  hover:scale-105 cursor-pointer">
                                            Buy at &#8377;{selectedProduct.price}</button>


                                    </div>

                                </div>

                            </div>

                        </div>
                    </ScrollAnimation>


                </div>
            )}

            {showMessage && (
                <div className="fixed bottom-6 right-10 z-[100] bg-[#EAE9E5] text-black px-4 py-2 text-[11px] md:text-[13px]
                shadow-lg animate__animated animate__fadeInUp"
                >  Item added to the cart!
                </div>

            )}


        </div>
    )
}

export default Shop;