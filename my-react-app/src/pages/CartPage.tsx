import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { updateQuantity, removeFromCart, clearCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const totalItems = items.reduce((sum: number, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum: number, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="grid gap-6">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border-b">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => dispatch(updateQuantity({ 
                        id: item.id, 
                        quantity: Math.max(1, item.quantity - 1) 
                      }))}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(updateQuantity({ 
                        id: item.id, 
                        quantity: item.quantity + 1 
                      }))}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;