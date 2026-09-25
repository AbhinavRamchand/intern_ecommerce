import {useOutletContext} from "react-router-dom"

interface Product {
    image: string;
    type: string;
    total: number;
}

interface DashoardProps {
  darkMode: boolean;
}


function Categories() {

      const {darkMode}=useOutletContext<DashoardProps>();

    const products: Product[] = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2uDlVyZII6FyoTRqJC1gm3A3TRxYSdwi6TJSjgdn55DyzEd_XAeq6PbC&s=10",
            type: "Women",
            total: 62
        },
        {
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/l/o/t/-original-imaheycf4b58hgkq.jpeg?q=70",
            type: "Men",
            total: 48
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnUFFNVr5Mu9UtL_k9pzkNHTizDudJV6_aMmjhS0bGw&s=10",
            type: "Tops",
            total: 22
        },
        {
            image: "https://levi.in/cdn/shop/files/00BF30017_01_Styleshot.jpg?v=1788432653",
            type: "T-Shirts",
            total: 36
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sp0eoOfpNgYQObvwgeAOugb7r7TzIXWvqXH8fbY65NxOecdMRJ90EanF&s=10",
            type: "Dresses",
            total: 28
        },
        {
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/9/b/8/30-fl-3-1-wmn-lyt-blu-bag-n4-stitch-factory-original-imahqwmfhwnczaqt.jpeg?q=70",
            type: "Jeans",
            total: 55
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxL4RntZjsHipXbT4qWiRHr4MAS8aje6ZxVYeRiEWgcwn07AY2tkcYdMA&s=10",
            type: "Accessories",
            total: 73
        },
        {
            image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/2/x/l/-watermarked-original-imahfhpk5ntsgvvk.jpeg?q=70",
            type: "Shoes",
            total: 14
        },

    ]

    return (
        <div className={`min-h-full p-5 md:px-10 py-5 ${darkMode?"bg-black":"bg-[#F7F6F3]"}`}>
            <h2 className={`font-bold  text-xl  md:text-2xl mb-5 ${darkMode?"text-white":"text-[#7E6A5A]"}`}>Categories</h2>

            <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  md:gap-8">
                {products.map((product) => (

                    <div key={product.type} className={`flex flex-col p-2 rounded-lg gap-4 ${darkMode ? "bg-[#242424] border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)]" :"shadow-[0_2px_8px_rgba(0,0,0,0.08)]"}`}>

                        <div className="aspect-[3/3]  w-full overflow-hidden rounded-sm">
                            <img src={product.image} alt= {product.type} className="h-full  object-cover object-center 
                            w-full transition duration-300 hover:scale-105" />
                            
                        </div>

                        <div className="ml-1 pb-1">
                            <p className="bg-[#7E6A5A]/90 w-fit text-white text-[10px] md:text-[13px] mb-1 px-2 rounded-sm">{product.type}</p>
                            <p className={`text-[10px] md:text-[12px] ${darkMode?"text-white":"text-gray-500"}`}>{product.total} products</p>
                        </div>

                    </div>

                ))}

            </div>
        </div>
    )
}

export default Categories;
