import  { useEffect, useState } from "react";
import trending from "./assets/trnding.jpg";
import retro from "./assets/retro.jpg";
import streetwear from "./assets/streetwear.jpg";
import Tshirt from "./assets/Tshirt.jpg";
import squareneck from "./assets/squareneck.jpg";
import croptop from "./assets/croptop.jpg"
import checkshirt from "./assets/checkshirt.jpg"
import Tshirtwithsleeve from "./assets/T-shirt with sleeve.jpg"
import Frontpocket from "./assets/Frontpocket.jpg"
import Fitshirt  from "./assets/Baggy shirt.jpg"
import coloredshirt from "./assets/coloredshirt.jpg"
function Trends() {

  const slides = [
    {
      image:
        streetwear,
      title: "NEW SEASON",
      subtitle: "Streetwear that speaks for you.",
      offer: "UP TO 40% OFF",
    },
    {
      image:trending,
      title: "TRENDING NOW",
      subtitle: "Your next favorite outfit is here.",
      offer: "FLAT 30% OFF",
    },
    {
      image:retro,
      title: "Y2K VIBES",
      subtitle: "Retro style. Modern attitude.",
      offer: "UP TO 50% OFF",
    },
  ];

  const products=[
    {
    image:Tshirt,
     title:"T-shirt",
     oldprice:"₹999",
     newprice:"₹599",
     offer:"40% OFF",

    },
{
    image:squareneck,
      title:"Square Neck Backless Top",
      oldprice:"₹1499",
      newprice:"₹900",
      offer:"40% OFF"
      
},
{
  image:coloredshirt,
  title :"slimfit collar shirt",
  oldprice:"₹1900",
  newprice:"₹1100",
  offer:"33% OFF"
},
{
   image :croptop,
   title:" casual Top",
   oldprice:"₹1800",
   newprice:"₹1200",
   offer:"33% OFF"
},

{
    image:checkshirt,
    title:"check shirt",
    oldprice:"₹1700",
    newprice:"₹1100",
    offer:"35% OFF",
},

{
     image:Tshirtwithsleeve,
     title:"sleeve T-shirt",
     oldprice:"₹2999",
     newprice:"₹1999",
     offer:"33% OFF"
},
{
    image:Frontpocket,
    title:"Front pocket shirt",
    oldprice:"₹1800",
    newprice:"₹1200",
    offer:"33% OFF"
},
  {
    image:Fitshirt,
    title:"Regualar Fit shirt",
    oldprice:"₹2000",
    newprice:"₹1000",
    offer:"50% OFF"
  }
    
  ]



  const [currentSlide, setCurrentSlide] = useState(0);

 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

 

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-gray-900">

      <section className="relative h-90 min-h-[550px] overflow-hidden">

        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

        
            <div className="absolute inset-0 bg-black/40" />

        
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
              <div>

                <p className="mb-4 text-sm font-bold tracking-wide">
                  {slide.offer}
                </p>

                <h1 className="text-5xl font-black md:text-8xl">
                  {slide.title}
                </h1>

                <p className="mx-auto mt-5 max-w-lg text-lg md:text-xl">
                  {slide.subtitle}
                </p>

                <button className="mt-8 rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105">
                  SHOP NOW 
                </button>

              </div>
            </div>
          </div>
        ))}

      

      </section>


  <h1 className="text-3xl font-bold mx-5 mt-10">Trending</h1>
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8">

  {products.map((product) => (
    <div
      key={product.title}
      className="group w-full  mx-auto  bg-white  transition-all duration-300"
    >

      <div className="relative overflow-hidden bg-gray-100">
        <img
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          src={product.image}
          alt={product.title}
        />

        <span className="absolute top-3 left-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          {product.offer}
        </span>
      </div>

      <div className="p-4">

        <p className="text-base font-semibold text-gray-900">
          {product.title}
        </p>

        <div className="mt-2 flex items-center gap-2">
          <del className="text-sm text-gray-400">
            {product.oldprice}
          </del>

          <p className="text-lg font-bold text-gray-900">
            {product.newprice}
          </p>
        </div>

        <p className="mt-1 text-sm font-medium text-green-600">
          {product.offer}
        </p>

       

      </div>
    </div>
  ))}

</section>


    </div>



  );
}

export default Trends;
