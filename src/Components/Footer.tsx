import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ScrollAnimation from "./ScrollAnimation";

function Footer() {
    return (
        <div className="mt-10">


            <div className="w-full flex flex-col justify-center items-center bg-[#EAE9E5]/30 py-[100px]">

                <ScrollAnimation animation="animate__pulse">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold font-mono mb-10">SIGN UP FOR OUR NEWSLETTER</p>
                </ScrollAnimation>

                <input type="email" placeholder="Your Email Address" className="border border-gray-300 rounded-md px-4 focus:outline-none
             py-2 w-[300px] md:w-[400px] lg:w-[700px] mb-4 shadow-[0_0_5px_0_rgba(0,0,0,0.1)] bg-white" />

                <Link to="/signup" className="inline-block bg-[#7E6A5A] text-center text-[13px] md:text-lg text-white px-4 py-2 w-[300px] md:w-[400px] lg:w-[700px]
                     font-semibold hover:bg-[#5a4a3a] transition duration-300  hover:translate-y-1">SIGN UP</Link>

            </div>


            <div className="relative mb-[100px]">

                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5 lg:gap-y-0">
                    <img src="https://themewagon.github.io/kaira/images/insta-item1.jpg" alt="footer-image" className="w-full h-[350px] md:h-[300px] lg:h-[200px] object-cover" />
                    <img src="https://themewagon.github.io/kaira/images/insta-item2.jpg" alt="footer-image" className="w-full h-[350px] md:h-[300px] lg:h-[200px] object-cover" />
                    <img src="https://themewagon.github.io/kaira/images/insta-item3.jpg" alt="footer-image" className="w-full h-[350px] md:h-[300px] lg:h-[200px] object-cover" />
                    <img src="https://themewagon.github.io/kaira/images/insta-item4.jpg" alt="footer-image" className="w-full h-[350px] md:h-[300px] lg:h-[200px] object-cover" />
                    <img src="https://themewagon.github.io/kaira/images/insta-item5.jpg" alt="footer-image" className="w-full h-[350px] md:h-[300px] lg:h-[200px] object-cover" />
                    <img src="https://themewagon.github.io/kaira/images/insta-item6.jpg" alt="footer-image" className="w-full h-[350px] md:h-[300px] lg:h-[200px] object-cover" />

                </div>
               


                <a href="https://www.instagram.com/thecurate.in/" target="_blank" rel="noopener noreferrer"
                    className="absolute left-1/2 -translate-x-1/2  -bottom-[10px] z-10 bg-[#7E6A5A] text-[12px] text-nowrap
                 text-white font-bold px-9 py-2  flex items-center justify-center hover:bg-[#5a4a3a] transition duration-300"> Follow us on Instagram</a>


            </div>



            <div className="w-full bg-[#EAE9E5]/40">
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10  px-10 py-[80px]">

                    <div>
                        <h1 className="text-3xl font-bold text-[#7E6A5A] mb-3">C<span className=" text-black">URATE</span></h1>
                        <p className="text-gray-600 text-sm md:text-[14px] leading-relaxed">At CURATE, we believe the little things make life beautiful.
                            We thoughtfully bring together timeless pieces, chosen with love, care, and a touch of charm.</p>

                        <div className="flex gap-3 mt-5">
                            <FacebookIcon className=" hover:text-[#7E6A5A] transition duration-300" />
                            <PinterestIcon className=" hover:text-[#7E6A5A] transition duration-300" />
                            <YouTubeIcon className="hover:text-[#7E6A5A] transition duration-300" />
                            <TwitterIcon className=" hover:text-[#7E6A5A] transition duration-300" />
                            <InstagramIcon className="hover:text-[#7E6A5A] transition duration-300" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold mb-3 font-mono">QUICK LINKS</h1>

                        <Link to="/home" className="relative block w-fit text-sm md:text-[15px] mb-2 transition-colors duration-300 hover:text-[#7E6A5A]
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#7E6A5A]
                     after:transition-all after:duration-300 hover:after:w-full">  HOME</Link>

                        <Link to="/shop" className="relative block w-fit text-sm md:text-[15px] mb-2 transition-colors duration-300 hover:text-[#7E6A5A]
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#7E6A5A]
                     after:transition-all after:duration-300 hover:after:w-full">SHOP</Link>

                        <Link to="/trends" className="relative block w-fit text-sm md:text-[15px] mb-2 transition-colors duration-300 hover:text-[#7E6A5A]
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#7E6A5A]
                     after:transition-all after:duration-300 hover:after:w-full">TRENDS</Link>

                        <Link to="/blog" className="relative block w-fit text-sm md:text-[15px] mb-2 transition-colors duration-300 hover:text-[#7E6A5A]
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#7E6A5A]
                     after:transition-all after:duration-300 hover:after:w-full">BLOG</Link>

                        <Link to="/about" className="relative block w-fit text-sm md:text-[15px] mb-2 transition-colors duration-300 hover:text-[#7E6A5A]
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#7E6A5A]
                     after:transition-all after:duration-300 hover:after:w-full">ABOUT</Link>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold font-mono mb-3">HELP & INFO</h1>
                        <p className="text-sm md:text-[15px] mb-2">TRACK YOUR ORDER</p>
                        <p className="text-sm md:text-[15px] mb-2">RETURNS & EXCHANGES</p>
                        <p className="text-sm md:text-[15px] mb-2">PAYMENT OPTIONS</p>
                        <p className="text-sm md:text-[15px] mb-2">SHIPPING INFORMATION</p>
                        <p className="text-sm md:text-[15px] mb-2">CONTACT US</p>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold font-mono mb-3">GET IN TOUCH</h1>
                        <p className="text-gray-600">Do you have any questions? </p>
                        <p><MarkEmailReadIcon /> contact@curate.com</p>
                        <br></br>
                        <p className="text-gray-600">Do you need assistance? </p>
                        <p><LocalPhoneIcon /> +1 (123) 456-7890</p>
                    </div>

                </div>

                <hr className="border border-gray-200" />
                <p className="text-center text-sm py-4">
                    &copy; {new Date().getFullYear()} Curate. All rights reserved.
                </p>
            </div>

        </div>
    )
}

export default Footer;