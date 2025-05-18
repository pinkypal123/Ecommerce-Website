// ProductPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import Loader from "./Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, cartItems, incrementQty, decrementQty } = useCart();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);
  const cartItem = cartItems.find((item) => item.id === product?.id);
  const quantity = cartItem?.quantity || 0;
  return (
    <div className="p-4 max-w-xl mx-auto">
      {product ? (
        <>
          <img
            src={product.image}
            data-aos="zoom-in"
            className="h-64 mx-auto  transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <h1 className="text-2xl font-bold mt-4" data-aos="fade-up">
            {product.title}
          </h1>
          <p className="text-gray-600" data-aos="fade-up">
            {product.description}
          </p>
          <p className="text-xl font-semibold mt-2" data-aos="fade-up">
            ${product.price}
          </p>
          <div className="flex items-center gap-1  mt-3 justify-center">
          {quantity === 0 ? (
              <button
                onClick={() => addToCart(product)}
                className="w-75 bg-gray-800 text-white py-2  rounded-md hover:bg-gray-900 transition relative"
              >
                Add
              </button>
          ) : (
            <div className="flex items-center justify-between w-50 mt-4 bg-gray-100 rounded-md px-2 py-1">
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
        </>
      ) : (
        <Loader />
      )}
     
    </div>
  );
};

export default ProductDetail;
