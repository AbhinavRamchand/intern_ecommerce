import { Link } from "react-router";
import Shop from "./Shop";
import ScrollAnimation from "../Components/ScrollAnimation";


function Home() {
    return (
        <>
            <div className="min-h-[400px] md:min-h-[600px] bg-[#EAE9E5] flex items-center">
                <div className="w-1/2 px-10 md:px-14 animate__animated animate__fadeInDown animate__slow">

                    <p className="text-sm sm:text-md md:text-2xl text-gray-700">THE NEW EDIT </p>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#2F2F2F] mt-8"> Effortless style, Every day.</h1>

                    <Link to="/shop" className="inline-block mt-8 bg-[#7E6A5A] text-[13px] md:text-lg text-white px-4 py-2 sm:px-6 sm:py-2 md:px-10 md:py-4 
                    rounded-full font-semibold hover:bg-[#5a4a3a] transition duration-300  hover:scale-105">SHOP NOW</Link>
                </div>

                <div className="w-1/2 h-[600px]">
                    <img src="https://themewagon.github.io/kaira/images/single-image-2.jpg" alt="home-image"
                        className="w-full h-full object-cover" />
                </div>

            </div>


            <div className="mt-[100px]">

                <ScrollAnimation animation="animate__slideInUp" speed="slow">
                    <div className="flex flex-col justify-center items-center gap-5">

                        <p className="font-mono text-[25px] md:text-[65px]">New Collections</p>


                        <p className="w-[70%] md:w-[40%] leading-relaxed text-center text-gray-400 text-[15px]">
                            Discover thoughtfully curated styles designed to bring effortless elegance
                            to your everyday wardrobe. Explore fresh silhouettes, timeless essentials,
                            and modern pieces made for every moment.
                        </p>
                    </div>
                </ScrollAnimation>


              

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[75px] py-[65px] gap-[60px]">
                      <ScrollAnimation animation="animate__zoomIn" speed="slow">
                    <div className="flex flex-col h-[500px]">
                        <img src="https://themewagon.github.io/kaira/images/banner-image-6.jpg" alt="collections"
                            className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-90"></img>
                        <h2 className="text-center mt-3 font-semibold font-mono text-lg">Timeless Classics</h2>
                        <Link to="/shop" className="text-center font-bold bg-[#7E6A5A]/80 hover:bg-[#5a4a3a]/90 transition duration-300  hover:scale-105
                         px-4 py-1 rounded-md mx-auto mt-3">Discover Now</Link>

                    </div>
                    </ScrollAnimation>
                      <ScrollAnimation animation="animate__zoomIn" speed="slow">
                    <div className="flex flex-col h-[500px]">
                        <img src="https://themewagon.github.io/kaira/images/banner-image-4.jpg" alt="collections"
                            className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-90"></img>
                        <h2 className="text-center mt-3 text-center mt-3 font-semibold font-mono text-lg">Effortless Layers</h2>
                        <Link to="/shop" className="text-center font-bold bg-[#7E6A5A]/80 hover:bg-[#5a4a3a]/90 transition duration-300  hover:scale-105
                         px-4 py-1 rounded-md mx-auto mt-3">Discover Now</Link>

                    </div>
                    </ScrollAnimation>
                      <ScrollAnimation animation="animate__zoomIn" speed="slow">
                    <div className="flex flex-col h-[500px]">
                        <img src="https://themewagon.github.io/kaira/images/banner-image-5.jpg" alt="collections"
                            className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-90"></img>
                        <h2 className="text-center mt-3 text-center mt-3 font-semibold font-mono text-lg">Modern Essentials</h2>
                        <Link to="/shop" className="text-center font-bold bg-[#7E6A5A]/80 hover:bg-[#5a4a3a]/90 transition duration-300  hover:scale-105
                         px-4 py-1 rounded-md mx-auto mt-3">Discover Now</Link>

                    </div>
                    </ScrollAnimation>

                </div>
               


            </div>
  
            <p className="mt-[50px] mx-[75px] text-center font-mono text-[20px] md:text-[35px]">PRODUCT OVERVIEW</p>
        

            <Shop />


        </>
    )
}

export default Home;