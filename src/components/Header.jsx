import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  const { cartItems } = useCart();

  return (
    <div className="p-4 bg-blue-600 text-white flex justify-between">
      <Link to="/" className="text-2xl font-bold">MyStore</Link>
      {/* <div>Cart: {cartItems.length}</div> */}
      <div className="relative  cursor-pointer">
      <FaShoppingCart size={24} className="text-white" />
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-black text-white text-xs">
          {cartItems.length}
        </span>
      )}
    </div>
    </div>
  );
};
export default Header;