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
    return <p className="mt-24 text-center">Product not found</p>;
  }

  return (
    <div className="container mx-auto mt-24 px-4">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.img}
          alt={product.title}
          className="w-full max-h-96 object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-blue-600 mt-2">
            ${product.price}
          </p>

          <p className="mt-4 text-gray-600">
            {product.longDescription || product.description}
          </p>

          <button
            onClick={() => {
              dispatch(addToCart(product));
              toast.success(`${product.title} added to cart`);
            }}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-80"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
