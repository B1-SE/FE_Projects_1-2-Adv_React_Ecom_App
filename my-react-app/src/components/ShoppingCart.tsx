import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';

export const ShoppingCart = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  // Calculate total items and price
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
      
      {/* Display Total Items & Price */}
     <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
  <p className="font-semibold text-lg">
    🛒 <span className="text-blue-600">{totalItems}</span> items
  </p>
  <p className="font-bold text-xl mt-1">
    Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
  </p>
</div>
      
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {/* Cart Items List (existing code) */}
          {items.map((item) => (
            <div key={item.id} className="flex items-start border-b pb-4">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-20 h-20 object-contain mr-4" 
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => 
                      dispatch(updateQuantity({ 
                        id: item.id, 
                        quantity: Math.max(1, item.quantity - 1) 
                      }))
                    }
                    className="px-2 bg-gray-200 rounded"
                  >
                    −
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => 
                      dispatch(updateQuantity({ 
                        id: item.id, 
                        quantity: item.quantity + 1 
                      }))
                    }
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};