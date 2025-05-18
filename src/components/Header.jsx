import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  const { cartItems,toggleCart } = useCart();
  return (
    <div className="p-4 bg-blue-600 text-white flex justify-between">
      <Link to="/" className="text-2xl font-bold">MyStore</Link>
      <div className="relative  cursor-pointer">
        <button onClick={toggleCart} className="relative">
      <FaShoppingCart size={24} className="text-white" />
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-black text-white text-xs">
          {cartItems?.length}
        </span>
      )}
      </button>
    </div>
    </div>
  );
};
export default Header;