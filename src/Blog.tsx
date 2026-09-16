import blogimg1 from "./assets/blogimg1.jpg";
import blogimg2 from "./assets/blogimg2.jpg";
import blogimg3 from "./assets/blogimg3.jpg";
import winter from "./assets/winter.jpg";
import mens from "./assets/mens.jpg";
import street from "./assets/street.jpg";
import whiteshirt from "./assets/whiteshirt.webp";
import Blackshirt from "./assets/Blackshirt.webp";
import pant from "./assets/pant.webp"


function Blog() {

  const products=[{
       image:whiteshirt,
       Title:"white shirt classic",
       price:"₹1700",
  },
       {
          image:Blackshirt,
       Title:"Black shirt classic",
       price:"₹2000",
       },

       {
         image:pant,
       Title:"Leg korean pant",
       price:"₹999",
       }
  ]
  return (
    <section className="px-6 py-16 bg-white">

      
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
          Our Blog
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          Latest Fashion Stories
        </h2>
      </div>

      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

    
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-1 gap-10">

        
          <article className="group">

            <div className="relative overflow-hidden">
              <img
                src={blogimg1}
                alt="Winter dress fashion"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-3 left-4 bg-white px-3 py-3 text-center shadow-md">
                <p className="text-xl font-bold text-gray-900">
                  22
                </p>

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Jan 2018
                </p>
              </div>
            </div>

            <div className="pt-6">

              <h3 className="text-xl font-semibold text-gray-900">
                8 Inspiring Ways to Wear Dresses in the Winter
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                Donec dictum vitae sapien eu varius.
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                <span>By Admin</span>
                <span>|</span>
                <span>StreetStyle, Fashion, Couple</span>
              </div>

              <button className="mt-5 text-sm font-semibold text-gray-900 border-b border-gray-900 pb-1">
                Read More
              </button>

            </div>
          </article>


          
          <article className="group">

            <div className="relative overflow-hidden">
              <img
                src={blogimg2}
                alt="Men's fashion gifts"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-3 left-4 bg-white px-4 py-3 text-center shadow-md">
                <p className="text-xl font-bold text-gray-900">
                  17
                </p>

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Mar 2022
                </p>
              </div>
            </div>

            <div className="pt-6">

              <h3 className="text-xl font-semibold text-gray-900">
                The Great Big List of Men's Gifts for the Holidays
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                Donec dictum vitae sapien eu varius.
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                <span>By Admin</span>
                <span>|</span>
                <span>StreetStyle, Fashion, Couple</span>
              </div>

              <button className="mt-5 text-sm font-semibold text-gray-900 border-b border-gray-900 pb-1">
                Read More
              </button>

            </div>
          </article>


    
          <article className="group">

            <div className="relative overflow-hidden">
              <img
                src={blogimg3}
                alt="Winter to spring fashion trends"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-3 left-4 bg-white px-3 py-3 text-center shadow-md">
                <p className="text-xl font-bold text-gray-900">
                  22
                </p>

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Jan 2018
                </p>
              </div>
            </div>

            <div className="pt-6">

              <h3 className="text-xl font-semibold text-gray-900">
                5 Winter-to-Spring Fashion Trends to Try Now
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor.
                Donec dictum vitae sapien eu varius.
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                <span>By Admin</span>
                <span>|</span>
                <span>StreetStyle, Fashion, Couple</span>
              </div>

              <button className="mt-5 text-sm font-semibold text-gray-900 border-b border-gray-900 pb-1">
                Read More
              </button>

            </div>
          </article>

        </div>


    
        <aside className="w-full lg:w-1/4 ">

          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
            Recent Articles
          </h2>


    
          <article className="mt-6 group ">

            <div className="overflow-hidden">
              <img
                src={winter}
                alt="Winter Fashion Trends"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p  className="text-sm mt-2 text-gray-500">09 DEC 2026</p>

            <h3 className="mt-3 font-semibold text-gray-900">
              Winter Fashion Trends
            </h3>

            <p className="mt-1 text-sm text-gray-500 leading-6">
              Discover the latest styles and trends for this season.
            </p>

          </article>


          
          <article className="mt-8 group cursor-pointer">

            <div className="overflow-hidden">
              <img
                src={mens}
                alt="Men's Fashion Guide"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

               <p  className="text-sm mt-2 text-gray-500">21 DEC 2026</p>
            <h3 className="mt-3 font-semibold text-gray-900">
              Men's Fashion Guide
            </h3>

            <p className="mt-1 text-sm text-gray-500 leading-6">
              Simple ideas to upgrade your everyday style.
            </p>

          </article>


    
          <article className="mt-8 group cursor-pointer">

            <div className="overflow-hidden">
              <img
                src={street}
                alt="Street Style"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-sm mt-2 text-gray-500">16 JAN 2026</p>
            <h3 className="mt-3 font-semibold text-gray-900">
              Street Style Inspiration
            </h3>

            <p className="mt-1 text-sm text-gray-500 leading-6">
              Explore fresh streetwear ideas and everyday outfits.
            </p>

          </article>


           <aside className="mt-5 ">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Featured Products</h3>

          <div className="space-y-5">
            {products.map((product)=>(
              <div key={product.Title} className="flex gap-5 items-center">
                <img className="w-50 h-50" src={product.image}></img>
                <div>
                 <h3 className=" font-xl font-semibold">{product.Title}</h3>
                 <p className="text-gray-700">{product.price}</p>
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

