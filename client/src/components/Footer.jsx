import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Group 1.png';
import InstaLogo from '../assets/instagramLogo.svg'
import YoutubeLogo from '../assets/youtube-svgrepo-com.svg'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo Section */}
                    <div className="mb-4 md:mb-0 flex flex-col justify-center items-center">
                        <Link to="/">
                            <img src={Logo} alt="Website Logo" className="w-24" />
                        </Link>
                        <p className="mt-2 text-lg text-white font-extrabold ">Eductaion Plus+</p>
                    </div>

                    {/* Client Details Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold">Instructor Details</h3>
                        <p className="mt-2">Ashanboni, Gooda, Jharkhand, India</p>
                        <p className="mt-2">Contact: +91 9060601584</p>
                        <div className="flex justify-center md:justify-start gap-4 mt-4">
                            <a href="https://www.instagram.com/nadim_mahtab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="instagram">
                                <img src={InstaLogo} alt="Instagram" className="w-6" />
                            </a>
                            <a href="https://www.youtube.com/@Eud_plus" target="_blank" rel="YouTube channel">
                                <img src={YoutubeLogo} alt="YouTube" className="w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Developers Details Section */}
                    {/* <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">Developers</h3>
            <ul className="mt-2">
              <li>
                <p>Name: Sonu Kumar</p>
                <a href="https://www.instagram.com/sonu_kr_19/" target="_blank" rel="instagram">
                <img src={InstaLogo} alt="Instagram" className="w-6 mt-2" />
              </a>
              </li>
            </ul>
          </div> */}
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Education Plus+ All rights reserved.
                </div>
                <div className="text-center text-gray-500 text-sm">
                    <p>Developed by Sonu Kumar </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
