import React, { useState } from "react";
import { IoMdSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import CartButton from "./CartButton";
import type { Product } from "./ProductCard";
import { useNavigate } from "react-router-dom";

const MenuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blog" },
];

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  products: Product[];
}

const Navbar: React.FC<NavbarProps> = ({
  searchTerm,
  setSearchTerm,
  products,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="text-primary font-bold text-xl uppercase">
            Tech Star
          </a>

          {/* 👇 MENU LINKS (DESKTOP) */}
          <nav className="hidden lg:flex items-center gap-6">
            {MenuLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="font-semibold text-blue-500 hover:text-black transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search + Cart + Mobile Menu */}
          <div className="flex items-center gap-3">

            {/* Search */}
            <div className="relative hidden sm:block w-72">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />

              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />

              {/* 🔽 SEARCH DROPDOWN */}
              {showDropdown && searchTerm && filteredProducts.length > 0 && (
                <ul className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                  {filteredProducts.slice(0, 6).map((product) => (
                    <li
                      key={product.id}
                      onClick={() => {
                        navigate(`/product/${product.id}`);
                        setSearchTerm(product.title);
                        setShowDropdown(false);
                      }}
                      className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-10 h-10 object-contain"
                      />
                      <div>
                        <p className="text-sm font-medium">
                          {product.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          ${product.price}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cart */}
            <CartButton />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl"
            >
              {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>

        {/* 📱 MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-4 mt-2">
              {MenuLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-blue-500 hover:text-black"
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
