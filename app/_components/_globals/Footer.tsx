import Link from 'next/link';
import React from 'react';

import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="w-10/12 mx-auto py-12 px-4">
                <div className="flex flex-wrap gap-y-8">
                    {/* Logo and Info section */}
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 pr-10 ">
                        <div className="logo mt-4">
                            <img src="https://westcanauto.com/wp-content/uploads/2023/05/WestCanAP_logoNOUSI-300x156.png" alt="West Can Auto Parts Logo" className='pb-5 border-b-[0.5px] text-sm mb-5' />
                        </div>
                        <div className="info">
                            <div className="email mb-4 text-sm font-extralight flex items-center">
                                <FaEnvelope className="h-5 w-5 mr-2" /> info@westcanauto.com
                            </div>
                            <div className="follow-us text-lg mt-5 mb-4">Follow Us</div>
                            <div className="social-links flex space-x-4 text-sm font-light mb-2">
                                <a href="#" className="block"><FaFacebookF /></a>
                                <a href="#" className="block"><FaInstagram /></a>
                                <a href="#" className="block"><FaWhatsapp /></a>
                                <a href="#" className="block"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>
                    {/* Quick Links section */}
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mt-2 p-6 ">
                        <div className="heading text-xl font-semibold mb-4">Quick Links</div>
                        <ul className="leading-loose text-sm font-light">
                            <li><Link href="#">Products & Equipment</Link></li>
                            <li><Link href="#">Our Advantage</Link></li>
                            <li><Link href="#">Suppliers</Link></li>
                            <li><Link href="#">Locations</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">News & Flyers</Link></li>
                            <li><Link href="#">WhatsApp Chat</Link></li>
                        </ul>
                    </div>
                    {/* Discover section */}
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 p-6 ">
                        <div className="heading text-xl font-semibold mb-4">Discover</div>
                        <ul className="leading-loose text-sm font-light">
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Contact</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms & Conditions</Link></li>
                            <li><Link href="#">FAQs</Link></li>
                        </ul>
                    </div>
                    {/* Newsletter section */}
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 p-6">
                        <div className="heading text-xl font-semibold mb-4">Newsletter</div>
                        <p className="leading-loose text-sm font-light mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="flex flex-col space-y-3">
                            <input type="email" placeholder="Your email address" className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700" />
                            <button type="submit" className="px-4 py-2 bg-[#b02027] rounded text-white">Subscribe</button>
                        </form>
                    </div>
                </div>
                {/* Footer bottom section */}
                <div className="footer-bottom mt-8 border-t border-gray-700 pt-6">
                    <ul className="flex flex-wrap justify-between">
                        <li className='flex items-center space-x-3'>
                            <FaPhone className="h-5 w-5" />
                            <p>Admission helpline Number : +91- 94652 33333</p>
                        </li>
                        <li className='flex items-center space-x-3'>
                            {/* <FaEnvelope className="h-5 w-5" /> */}
                            <p>© 2024 Copyright West Can Auto Parts | All Rights Reserved</p>
                        </li>
                        <li className='flex items-center space-x-3'>
                            <FaPhone className="h-5 w-5" />
                            <p>Toll Free: 1800 120 1200</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
