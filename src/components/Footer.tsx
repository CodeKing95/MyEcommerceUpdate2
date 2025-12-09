import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/#" },
    { title: "Contact", link: "/#" },
    { title: "Blog", link: "/#" },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 bg-gray-100 mt-10 pt-12">
      <div className="container">
        <div className="grid md:grid-cols-4 pb-10 pt-5 gap-10">

          {/* Company details */}
          <div className="py-4 px-2">
            <a className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl" href="#">
              Tech Stars
            </a>
            <p className="text-gray-600 lg:pr-10 pt-3">
              Thank you so much for visiting this amazing tech stars website.
            </p>
            <p className="text-gray-500">
              Developed by Nadir Ahmed @ 2025.
            </p>
          </div>

          {/* Footer links */}
          <div>
            <h1 className="text-xl font-bold mb-3">Important Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className="text-gray-600 hover:text-blue-500 duration-300">
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h1 className="text-xl font-bold mb-3">Newsletter</h1>
            <p className="text-gray-600 mb-3">Subscribe to get latest tech updates 📬</p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-lg border focus:border-blue-500 outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Address */}
          <div>
            <h1 className="text-xl font-bold mb-3">Address</h1>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>London, UK</p>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <FaMobileAlt />
              <p>+0123456789</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6 text-3xl">
              <a href="#" className="hover:text-primary duration-300"><FaInstagram /></a>
              <a href="#" className="hover:text-primary duration-300"><FaFacebook /></a>
              <a href="#" className="hover:text-primary duration-300"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4 text-gray-500 border-t">
          © 2025 Tech Stars — All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
