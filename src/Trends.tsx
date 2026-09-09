import  { useEffect, useState } from "react";
import trending from "./assets/trnding.jpg";
import retro from "./assets/retro.jpg";
import streetwear from "./assets/streetwear.jpg";

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
 

    </div>
  );
}

export default Trends;
