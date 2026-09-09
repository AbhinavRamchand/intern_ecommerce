import { Link } from "react-router";

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

            <div className="my-[100px] mx-[60px] flex flex-col md:flex-row gap-10 justify-center items-center">

                <div className="w-full md:w-1/3 h-[250px] bg-[#EAE9E5] hover:scale-105 transition duration-300 border border-gray-200 px-10 pt-10"
                    style={{ backgroundImage: "url('https://themewagon.github.io/cozastore/images/banner-01.jpg')", backgroundSize: 'cover' }}>

                    <h2 className="text-3xl font-bold mb-2">Women</h2>
                    <h3 className="text-sm">Spring Collection</h3>

                </div>
                <div className="w-full md:w-1/3 h-[250px] bg-[#EAE9E5] hover:scale-105 transition duration-300 border border-gray-200"
                    style={{ backgroundImage: "url('https://themewagon.github.io/cozastore/images/banner-02.jpg')", backgroundSize: 'cover' }}></div>
                <div className="w-full md:w-1/3 h-[250px] bg-[#EAE9E5] hover:scale-105 transition duration-300 border border-gray-200"
                    style={{ backgroundImage: "url('https://themewagon.github.io/cozastore/images/banner-03.jpg')", backgroundSize: 'cover' }}></div>



            </div>



        </>
    )
}

export default Home;