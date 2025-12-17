import { useParams } from "react-router-dom";
import { ProductsData } from "../components/Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = ProductsData.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="mt-24 text-center text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* PRODUCT IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="w-full max-w-md max-h-96 object-contain rounded-lg shadow-md"
          />
        </div>

        {/* PRODUCT DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {product.title}
          </h1>

          <p className="text-2xl text-blue-600 font-semibold mb-4">
            ${product.price}
          </p>

          {product.rating && (
            <p className="text-yellow-500 mb-2">
              ⭐ {product.rating}{" "}
              <span className="text-gray-500">
                ({product.reviewCount} reviews)
              </span>
            </p>
          )}

          {product.sold && (
            <p className="text-sm text-gray-500 mb-4">
              Sold: {product.sold}
            </p>
          )}

          <p className="text-gray-600 leading-relaxed mb-6">
            {product.longDescription || product.description}
          </p>

          <button
            onClick={() => {
              dispatch(addToCart(product));
              toast.success(`${product.title} added to cart`);
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:opacity-80 transition"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
