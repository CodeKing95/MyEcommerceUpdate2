import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export interface Product {
  id: number;
  img: string;
  title: string;
  price: number;
  aosDelay?: string;
  description?: string;
  longDescription?: string;
  rating?: number;
  reviewCount?: number;
  sold?: number;
}

type ProductCardProps = {
  data: Product[];
  onAddToCart: (product: Product) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ data, onAddToCart }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {data.map((product) => (
          <div
            key={product.id}
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition"
          >
            {/* CLICKABLE IMAGE */}
            <Link to={`/product/${product.id}`}>
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-40 object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <h3 className="font-semibold text-lg mt-3">
              {product.title}
            </h3>

            <p className="text-gray-700 font-medium">
              ${product.price}
            </p>

            {product.rating && (
              <div className="flex items-center gap-2 text-sm text-yellow-500 mt-1">
                ⭐ {product.rating}
                <span className="text-gray-500">
                  ({product.reviewCount})
                </span>
              </div>
            )}

            {product.sold && (
              <p className="text-sm text-gray-500">
                Sold: {product.sold}
              </p>
            )}

            <button
              onClick={() => onAddToCart(product)}
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:opacity-80 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductCard;
