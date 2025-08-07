import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          FakeStore
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;