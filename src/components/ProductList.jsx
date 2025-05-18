// Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  console.log("======", products);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  let { openCartDrawer } = products;
  const calculateSubtotal = () => {
    return products.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  const incrementItemInCart = (id) => {
    setProducts({
      ...products,
      cartItems: products.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  const decrementItemInCart = (id) => {
    //if quantity is 1 remove item from cart
    if (products.find((item) => item.id === id).quantity === 1) {
      removeItemFromCart(id);
      return;
    }
    setProducts({
      ...products,
      cartItems: products.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ),
    });
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
