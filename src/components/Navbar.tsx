import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";
import CartButton from "./CartButton";


const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blog",
    },
];

const Navbar = () => {
    function setSearchTerm(value: string): void {
        throw new Error("Function not implemented.");
    }

    return(
        <div className="bg-white dark:bg-gray-900 dark:text-white">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* Logo and Links Section */}
                <div className="flex justify-between gap-4">
                    <a
                        href="#"
                        className="text-primary font-semibold
                        tracking-widset text-2xl uppercase
                        sm:text-3xl"
                        >
                            Tech Star
                        </a>
                        {/* Menu Items */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a 
                                        href={data.link}
                                        className="inline-block px-4
                                        font-semibold text-blue-500
                                        hover:text-block
                                        dark:hover:text-white duration-200"
                                        > 
                                        {" "}
                                        {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Navbar Right Section */}
                    <div className="flex justify-between items-center gap-4">
                    {/* Search Bar section */}
                     <div className="relative group hidden sm:block">
                    <input type="text" placeholder="Search" className="
                    search-bar
                    "/>
                    <IoMdSearch className="text-xl text-gray-600
                     group-hover:text-primary dark:text-gray-400 absolute top-1/-translate-y-1/2 right-3 duration-200"/>
                </div>

                {/* Order-button section */ }
                   <div className="flex justify-between items-center gap-4">
                    {/* Search Bar section */}
                
                {/* Order-button section */ }
                <CartButton/>
                    {/* Dark Mode  section */}
                   
                </div>
                    {/* Dark Mode  section */}
                   
                </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;