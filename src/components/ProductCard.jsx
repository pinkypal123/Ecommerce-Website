import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
const ProductCard = ({ product }) => (
  <div className="relative rounded-2xl bg-white p-4 shadow hover:shadow-lg transition"  data-aos="fade-up">
    <Link
      to={`/product/${product.id}`}
      className="text-blue-500 mt-2 block mb-4"
    >
      <FaEye className="absolute top-2  right-2 text-gray-700 cursor-pointer hover:text-gray-900" />
    </Link>
    <img
      src={product.image}
      alt={product.title}
      className="h-40 mb-4 mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
    />
    <h3>
      <a href="#">
        {product.title.length > 25
          ? `${product.title.slice(0, 25)}...`
          : product.title}
      </a>
    </h3>
    <p className="ml-4">${product.price}</p>
   
  </div>
);

export default ProductCard;
