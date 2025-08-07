import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { checkout } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalPrice = items.reduce((sum: number, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setTimeout(() => {
      dispatch(checkout());
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="p-8 text-center">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="mb-6">Thank you for your purchase.</p>
        <Link
          to="/"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-bold text-lg mb-2">Order Summary</h2>
        <p className="mb-1">Items: {items.reduce((sum: number, item) => sum + item.quantity, 0)}</p>
        <p className="font-bold text-xl">Total: ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-lg mb-2">Payment Information</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-2 border rounded"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600"
        disabled={items.length === 0}
      >
        Complete Purchase
      </button>
    </div>
  );
};

export default CheckoutPage;