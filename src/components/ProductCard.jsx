// import { Link } from "react-router-dom";
// import { FaEye } from "react-icons/fa";
// const ProductCard = ({ product }) => (
//   <div className="relative rounded-2xl bg-white p-4 shadow hover:shadow-lg transition"  data-aos="fade-up">
//     <Link
//       to={`/product/${product.id}`}
//       className="text-blue-500 mt-2 block mb-4"
//     >
//       <FaEye className="absolute top-2  right-2 text-gray-700 cursor-pointer hover:text-gray-900" />
//     </Link>
//     <img
//       src={product.image}
//       alt={product.title}
//       className="h-40 mb-4 mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
//     />
//     <h3>
//       <a href="#">
//         {product.title.length > 25
//           ? `${product.title.slice(0, 25)}...`
//           : product.title}
//       </a>
//     </h3>
//     <p className="ml-4">${product.price}</p>

//   </div>
// );

// export default ProductCard;
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaPlus, FaMinus } from "react-icons/fa";
function ProductCard({ product }) {
  const { cartItems, addToCart, incrementQty, decrementQty } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const cartItem = cartItems.find((item) => item.id === product.id);

  const quantity = cartItem?.quantity || 0;
  useEffect(() => {
    // If quantity becomes 0 (after decrement), revert back to 'Add' button
    if (quantity === 0) {
      setIsAdded(false);
    }
  }, [quantity]);

  const handleAdd = (item) => {
    addToCart(item);
    setIsAdded(true);
  };

  return (
    <div
      className="relative rounded-2xl bg-white p-4 shadow hover:shadow-lg transition"
      data-aos="fade-up"
    >
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

      {/* <div className="mt-4 flex justify-center items-center gap-2">
        {!isAdded ? (
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => decrementQty(product.id)}
              className="bg-gray-200 px-2 rounded hover:bg-gray-300"
            >
              −
            </button>
            <span className="min-w-[20px] text-center">{quantity}</span>
            <button
              onClick={() => incrementQty(product.id)}
              className="bg-gray-200 px-2 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
        )}
      </div> */}
      {quantity === 0 ? (
        <div className="flex items-center gap-1 w-full mt-3 justify-center">
          <button
            onClick={() => handleAdd(product)}
           className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition relative"
          >
            Add
          </button>
        </div>
      ) : (
       <div className="flex items-center justify-between w-full mt-4 bg-gray-100 rounded-md px-2 py-1">
  <button
    onClick={() => decrementQty(product.id)}
    className="text-gray-600 px-3 py-1 hover:text-black"
  >
    −
  </button>
  <span className="text-sm font-medium">{quantity}</span>
  <button
    onClick={() => incrementQty(product.id)}
    className="text-gray-600 px-3 py-1 hover:text-black"
  >
    +
  </button>
</div>
      )}
    </div>
  );
}

export default ProductCard;
