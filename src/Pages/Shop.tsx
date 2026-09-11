import { useState } from "react";
import { products, type Product } from "../Data/Product";
import CloseIcon from '@mui/icons-material/Close';
import ScrollAnimation from "../Components/ScrollAnimation";


function Shop() {

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


            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               
                {filteredProducts.map((product) => (
                    
                        <div key={product.id} className="group">

                            <div className="relative overflow-hidden">
                                <img src={product.image} alt={product.name}
                                    className="h-auto md:h-[350px] w-full object-contain transition duration-500 hover:scale-105" />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2  translate-y-full opacity-0 group-hover:opacity-100
                             transition duration-300 group-hover:translate-y-0 ease-in-out">

                                    <button onClick={() => handleClick(product)} className=" px-5 py-3  bg-[#7E6A5A] text-[12px] font-medium
                                  text-white transition duration-300 hover:bg-white/99 hover:text-[#5C4D42] whitespace-nowrap">
                                        QUICK OVERVIEW
                                    </button>
                                </div>

                            </div>

                            <div className="mt-3 flex flex-col items-center justify-center">
                                <h2 className="text-[14px] font-medium text-gray-400">{product.name}</h2>
                                <p className=" text-gray-600">&#8377;{product.price}</p>
                            </div>
                        </div>
              

                ))}
              

            </div>
            

            {selectedProduct && (
                <div className="fixed inset-0 z-50 items-center justify-center bg-black/70 "
                    onClick={() => setSelectedProduct(null)}>

                    <ScrollAnimation animation="animate__slideInUp">
                        <div className="relative w-[95%] mx-auto mt-[50px] bg-white px-5 py-[35px] md:p-10 h-full"
                            onClick={(e) => e.stopPropagation()}>

                            <button onClick={() => setSelectedProduct(null)} className="absolute right-4 top-3 mb-5">
                                <CloseIcon className="text-gray-500 hover:text-black " />
                            </button>


                            <div className="flex flex-row gap-7 sm:gap-10 md:gap-[50px]">

                                <img src={selectedProduct.image} alt={selectedProduct.name} className="h-auto md:h-[95%] 
                            w-[60%] md:w-[40%] object-cover"></img>

                                <div className="flex flex-col mx-auto md:mx-10 my-[20px] md:my-[55px] gap-2">
                                    <h1 className="text-lg text-gray-600 md:text-2xl font-bold">{selectedProduct.name}</h1>
                                    <h2 className="font-bold text-sm md:text-lg">&#8377;{selectedProduct.price}</h2>
                                    <p className="text-gray-500 my-5 text-sm md:text-lg">{selectedProduct.description}</p>

                                    <div className="flex items-center gap-4">
                                        <button className="border px-3 py-1" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}> -</button>
                                        <span>{quantity}</span>
                                        <button className="border px-3 py-1" onClick={() => setQuantity(quantity + 1)}> +</button>
                                    </div>

                                    <button onClick={handleAddToCart} className="px-2 md:px-4 py-2 bg-[#7E6A5A]  text-sm md:text-base mt-5 text-white hover:bg-[#5a4a3a] w-[100px] md:w-[150px]
                                 transition duration-300  hover:scale-105 cursor-pointer">Add to cart</button>
                                </div>

                            </div>

                        </div>
                    </ScrollAnimation>


                </div>
            )}

            {showMessage && (
                <div className="fixed bottom-6 right-10 z-[100] bg-[#7E6A5A] text-white px-4 py-2 text-[11px] md:text-[13px]
                shadow-lg animate__animated animate__fadeInUp"
                >  Item added to the cart!
                </div>

            )}


        </div>
    )
}

export default Shop;