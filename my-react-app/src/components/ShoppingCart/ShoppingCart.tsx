import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const ShoppingCart = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  const totalItems = items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {/* ...rest of the component code... */}
    </div>
  );
};

export default ShoppingCart;