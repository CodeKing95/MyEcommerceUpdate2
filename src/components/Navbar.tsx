import React, { useState } from "react";
import { IoMdSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import CartButton from "./CartButton";

const MenuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blog" },
];

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-primary font-bold text-xl sm:text-2xl uppercase"
          >
            Tech Star
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {MenuLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="font-semibold text-blue-500 hover:text-black dark:hover:text-white transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Search (desktop) */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Cart */}
            <CartButton />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl text-gray-700 dark:text-white"
            >
              {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none"
                />
                <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              {/* Mobile Links */}
              {MenuLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-blue-500 hover:text-black dark:hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
