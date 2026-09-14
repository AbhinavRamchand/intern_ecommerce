import ScrollAnimation from "../Components/ScrollAnimation";

function About() {
    return (
        <>

            <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] bg-cover md:bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images5.alphacoders.com/364/364727.jpg')" }}>
                <div className="absolute inset-0 bg-black/50"></div>


                <div className="relative z-10 h-full flex flex-col justify-center items-center
                 text-white gap-1 md:gap-4 animate__animated animate__fadeInDown animate__slow">

                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold">About Curate</h2>

                    <p className="text-white/70 text-md sm:text-xl">  Style that feels like you. </p>

                </div>


            </div>


            <div className="bg-[#EAE9E5]">
                <ScrollAnimation animation="animate__zoomIn" speed="slow">
                <p className="py-5 text-center text-[10px] md:text-[12px] font-semibold">TIMELESS LUXURY, MODERN DESIGN & ELEVATED STYLE — CURATED FOR YOU.</p>
                </ScrollAnimation>
                </div>

<ScrollAnimation speed="slow">
            <div className="flex flex-col md:flex-row w-[90%] mx-auto mt-[95px] mb-[150px] gap-[85px]">
                
                <div className="w-full md:w-[58%]">
                    <h2 className="mb-3 font-bold text-[24px] text-[#7E6A5A]">About Curate</h2>
                    <p className="leading-6 text-[14px] text-gray-500 text-justify">Curate is a fashion destination
                        for those who believe style should feel effortless, distinctive, and uniquely personal.
                        We blend contemporary trends with timeless essentials, thoughtfully handpicking pieces that
                        inspire confidence and elevate your everyday wardrobe. Every piece is carefully chosen to complement
                        your lifestyle, mood, and personality.
                        <br></br>
                        <br></br>With Curate, discovering your perfect style becomes effortless.

                        Whether you are drawn to timeless classics or the latest trends, Curate invites you to explore and redefine your personal
                        style. We believe the right outfit can transform not only how you look, but also how you feel. Our collections are designed to help
                        you express yourself with confidence and create a wardrobe that feels truly yours. Discover pieces that speak to your personality
                        and fit effortlessly into your everyday life. <br></br><br></br>Experiment with new looks, embrace your individuality, and make every outfit meaningful.
                        Let your style reflect who you are and where you are going.
                        <span className="font-bold text-[#7E6A5A]">Create a wardrobe that celebrates your individuality and inspires
                            you to feel confident every day. Let Curate be part of your journey toward effortless, personal style.</span>Find your signature
                        style with Curate and make every look your own.

                    </p>
                </div>
           
                <div className="relative w-[400px] h-[350px] mx-auto">

                    <div className="absolute left-[-25px] top-[25px] w-full h-full border-2 border-gray-300"></div>

                    <div className="relative z-10 w-full h-full overflow-hidden">
                        <img
                            src="https://cpimg.tistatic.com/10370748/b/4/multi-purpose-portable-metal-garment-rack-clothes-hanging-storage-holder.jpg"
                            alt="dress-image"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                </div>
              
            </div>
              </ScrollAnimation>

<ScrollAnimation speed="slow">
            <div className="flex flex-col md:flex-row w-[90%] mx-auto my-[95px] gap-[85px]">
                <div className="relative order-2 md:order-1 w-[400px] h-[350px] mx-auto">

                    <div className="absolute right-[-25px] top-[25px] w-full h-full border-2 border-gray-300"></div>

                    <div className="relative z-10 w-full h-full overflow-hidden">
                        <img
                            src="https://t4.ftcdn.net/jpg/18/69/78/85/360_F_1869788579_QcR9k36NQhozGkA1v6afkWrgHiTLCG4a.jpg"
                            alt="dress-image"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                </div>

                <div className="w-full md:w-[58%] order-1 md:order-2">
                    <h2 className="mb-3 font-bold text-[24px] text-[#7E6A5A]">Our Mission</h2>
                    <p className="leading-6 text-[14px] text-gray-500 text-justify">Our mission is to make fashion feel effortless,
                        personal, and empowering by bringing together contemporary trends and timeless essentials. At Curate,
                        we carefully select pieces that inspire confidence, celebrate individuality, and fit seamlessly into
                        everyday life. We believe fashion is a way to express who you are, and our goal is to help you discover
                        your unique style and make every outfit feel truly yours. We strive to create a fashion experience that
                        is inspiring, accessible, and enjoyable for everyone. Every collection is thoughtfully curated to help you
                        feel confident, comfortable, and ready to express yourself.


                    </p>

                    <div className="flex gap-6 mt-10">
                        <div className="h-auto w-1 bg-gray-300"></div>
                        <div>
                            <p className="mb-5 leading-6 text-[16px] italic text-gray-500">Style is not about following every trend; it is about discovering what feels right for you. The best outfits are
                                the ones that reflect your personality, give you confidence, and make you feel completely yourself.</p>
                            <p className="text-[14px] text-gray-600">-Curate</p>
                        </div>

                    </div>
                </div>

            </div>
            </ScrollAnimation>


        </>
    )
}

export default About;