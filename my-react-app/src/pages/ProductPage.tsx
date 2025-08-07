import { useParams } from 'react-router-dom';
import { useProducts } from '../api/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import type { RootState } from '../store/store';

const ProductPage = () => {
  const { id } = useParams();
  const { data: products } = useProducts();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const product = products?.find((p: { id: number }) => p.id === Number(id));
  const inCart = cartItems.some((item: { id: number }) => item.id === Number(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-auto max-h-96 object-contain"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-500 mb-4">{product.category}</p>
          <p className="text-xl font-bold mb-4">${product.price}</p>
          <p className="mb-6">{product.description}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            disabled={inCart}
            className={`px-4 py-2 rounded text-white ${
              inCart ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {inCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;