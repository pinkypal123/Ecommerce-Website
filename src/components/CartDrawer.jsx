import { useCart } from '../context/CartContext';

import { IoClose } from 'react-icons/io5'; // 👈 Import close icon

const CartDrawer = () => {
  const { cartItems, isCartOpen, incrementQty, decrementQty, removeItem, toggleCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (

<div>

  {isCartOpen && cartItems.length !== 0 && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-white/30 backdrop-blur-sm transition-opacity z-40"
      onClick={toggleCart}
    ></div>

    {/* Cart Drawer */}
    <div
      id="drawer-right-example"
      className="fixed top-0 right-0 z-50 h-screen  overflow-y-auto transition-transform bg-white w-full sm:w-96 dark:bg-gray-800 translate-x-0"
      aria-labelledby="drawer-right-label"
    >
      <div
        className="relative z-50 h-full"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-full flex-col bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Shopping cart
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  onClick={toggleCart}
                >
                  <IoClose size={24} />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <li className="flex py-6" key={product.id}>
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{product.title}</h3>
                            <p className="ml-4">${product.price}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm mt-2">
                          <div className="text-gray-500">
                            <button
                              className="px-2 bg-gray-200 rounded-full"
                              onClick={() => decrementQty(product.id)}
                            >
                              -
                            </button>
                            <span className="mx-2">{product.quantity}</span>
                            <button
                              className="px-2 bg-gray-200 rounded-full"
                              onClick={() => incrementQty(product.id)}
                            >
                              +
                            </button>
                          </div>
                          <div className="flex">
                            <button
                              className="font-medium text-red-500 hover:text-red-600"
                              onClick={() => removeItem(product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)}

</div>

  );
};

export default CartDrawer;
