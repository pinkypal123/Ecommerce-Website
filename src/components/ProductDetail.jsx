// ProductPage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import Loader from './Loader';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  // if (!product) return <div className="p-4">Loader</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      {product?<>
      <img src={product.image}   data-aos="zoom-in" className="h-64 mx-auto  transition-transform duration-300 ease-in-out hover:scale-110" />
      <h1 className="text-2xl font-bold mt-4" data-aos="fade-up">{product.title}</h1>
      <p className="text-gray-600" data-aos="fade-up">{product.description}</p>
      <p className="text-xl font-semibold mt-2" data-aos="fade-up">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Add to Cart
      </button></>:<Loader/>}
    </div>
  );
};

export default ProductDetail;
