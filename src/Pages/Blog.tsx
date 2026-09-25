
import blogimg1 from "../assets/blogimg1.jpg";
import blogimg2 from "../assets/blogimg2.jpg";
import blogimg3 from "../assets/blogimg3.jpg";
import winter from "../assets/winter.jpg";
import mens from "../assets/mens.jpg";
import street from "../assets/street.jpg";
import whiteshirt from "../assets/whiteshirt.webp";
import Blackshirt from "../assets/Blackshirt.webp";
import pant from "../assets/pant.webp";
import { useOutletContext } from "react-router-dom";

function Blog() {

  
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  const products = [
    {
      image: whiteshirt,
      Title: "white shirt classic",
      price: "₹1700",
    },
    {
      image: Blackshirt,
      Title: "Black shirt classic",
      price: "₹2000",
    },
    {
      image: pant,
      Title: "Leg korean pant",
      price: "₹999",
    },
  ];

  return (
    <section
      className={`min-h-screen px-6 py-16 transition-colors duration-500 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-white text-gray-900"
      }`}
    >

  
      <div className="mb-12 text-center">

        <p
          className={`text-sm font-semibold uppercase tracking-[0.3em] ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Our Blog
        </p>

        <h2
          className={`mt-2 text-3xl font-bold md:text-4xl ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Latest Fashion Stories
        </h2>

      </div>


    
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">

      
        <div className="grid w-full grid-cols-1 gap-10 lg:w-3/4">


     
          <article className="group">

            <div className="relative overflow-hidden">

              <img
                src={blogimg1}
                alt="Winter dress fashion"
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div
                className={`absolute left-4 top-3 px-3 py-3 text-center shadow-md ${
                  darkMode
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <p className="text-xl font-bold">
                  22
                </p>

                <p
                  className={`text-xs uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Jan 2018
                </p>
              </div>

            </div>


            <div className="pt-6">

              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                8 Inspiring Ways to Wear Dresses in the Winter
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                Donec dictum vitae sapien eu varius.
              </p>

              <div
                className={`mt-4 flex items-center gap-3 text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <span>By Admin</span>
                <span>|</span>
                <span>StreetStyle, Fashion, Couple</span>
              </div>

              <button
                className={`mt-5 border-b pb-1 text-sm font-semibold ${
                  darkMode
                    ? "border-white text-white"
                    : "border-gray-900 text-gray-900"
                }`}
              >
                Read More
              </button>

            </div>

          </article>


     
          <article className="group">

            <div className="relative overflow-hidden">

              <img
                src={blogimg2}
                alt="Men's fashion gifts"
                className="h-80 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

          
              <div
                className={`absolute left-4 top-3 px-4 py-3 text-center shadow-md ${
                  darkMode
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <p className="text-xl font-bold">
                  17
                </p>

                <p
                  className={`text-xs uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Mar 2022
                </p>
              </div>

            </div>


            <div className="pt-6">

              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                The Great Big List of Men's Gifts for the Holidays
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                Donec dictum vitae sapien eu varius.
              </p>

              <div
                className={`mt-4 flex items-center gap-3 text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <span>By Admin</span>
                <span>|</span>
                <span>StreetStyle, Fashion, Couple</span>
              </div>

              <button
                className={`mt-5 border-b pb-1 text-sm font-semibold ${
                  darkMode
                    ? "border-white text-white"
                    : "border-gray-900 text-gray-900"
                }`}
              >
                Read More
              </button>

            </div>

          </article>


          <article className="group">

            <div className="relative overflow-hidden">

              <img
                src={blogimg3}
                alt="Winter to spring fashion trends"
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

        
              <div
                className={`absolute left-4 top-3 px-3 py-3 text-center shadow-md ${
                  darkMode
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <p className="text-xl font-bold">
                  22
                </p>

                <p
                  className={`text-xs uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Jan 2018
                </p>
              </div>

            </div>


            <div className="pt-6">

              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                5 Winter-to-Spring Fashion Trends to Try Now
              </h3>

              <p
                className={`mt-3 leading-7 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                Donec dictum vitae sapien eu varius.
              </p>

              <div
                className={`mt-4 flex items-center gap-3 text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <span>By Admin</span>
                <span>|</span>
                <span>StreetStyle, Fashion, Couple</span>
              </div>

              <button
                className={`mt-5 border-b pb-1 text-sm font-semibold ${
                  darkMode
                    ? "border-white text-white"
                    : "border-gray-900 text-gray-900"
                }`}
              >
                Read More
              </button>

            </div>

          </article>

        </div>


     
        <aside className="w-full lg:w-1/4">

    
          <h2
            className={`border-b pb-3 text-xl font-bold ${
              darkMode
                ? "border-gray-700 text-white"
                : "border-gray-200 text-gray-900"
            }`}
          >
            Recent Articles
          </h2>


    
          <article className="mt-6 group">

            <div className="overflow-hidden">
              <img
                src={winter}
                alt="Winter Fashion Trends"
                className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p
              className={`mt-2 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              09 DEC 2026
            </p>

            <h3
              className={`mt-3 font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Winter Fashion Trends
            </h3>

            <p
              className={`mt-1 text-sm leading-6 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Discover the latest styles and trends for this season.
            </p>

          </article>


          <article className="mt-8 group cursor-pointer">

            <div className="overflow-hidden">
              <img
                src={mens}
                alt="Men's Fashion Guide"
                className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p
              className={`mt-2 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              21 DEC 2026
            </p>

            <h3
              className={`mt-3 font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Men's Fashion Guide
            </h3>

            <p
              className={`mt-1 text-sm leading-6 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Simple ideas to upgrade your everyday style.
            </p>

          </article>


      
          <article className="mt-8 group cursor-pointer">

            <div className="overflow-hidden">
              <img
                src={street}
                alt="Street Style"
                className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p
              className={`mt-2 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              16 JAN 2026
            </p>

            <h3
              className={`mt-3 font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Street Style Inspiration
            </h3>

            <p
              className={`mt-1 text-sm leading-6 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Explore fresh streetwear ideas and everyday outfits.
            </p>

          </article>


       
          <aside className="mt-8">

            <h3
              className={`mb-5 text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Featured Products
            </h3>

            <div className="space-y-5">

              {products.map((product) => (

                <div
                  key={product.Title}
                  className="flex items-center gap-5"
                >

                  <img
                    className="h-24 w-24 object-cover"
                    src={product.image}
                    alt={product.Title}
                  />

                  <div>

                    <h3
                      className={`font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {product.Title}
                    </h3>

                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      {product.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </aside>

        </aside>

      </div>

    </section>
  );
}

export default Blog;

