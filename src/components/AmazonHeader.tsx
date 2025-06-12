
import { useState } from 'react';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useCart } from '../contexts/CartContext';

const AmazonHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const { items } = useCart();
  
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const departments = [
    'All Departments',
    'Electronics',
    'Computers',
    'Home & Kitchen',
    'Fashion',
    'Books',
    'Sports & Outdoors',
    'Toys & Games'
  ];

  return (
    <header className="bg-amazon-dark-blue text-white">
      {/* Top Navigation */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold">
              amazon<span className="text-amazon-orange">.com</span>
            </div>
          </Link>

          {/* Location */}
          <div 
            className="relative cursor-pointer hover:bg-white/10 p-2 rounded"
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
          >
            <div className="text-xs text-gray-300">Deliver to</div>
            <div className="flex items-center">
              <span className="text-sm font-bold">United States</span>
              <ChevronDown className="ml-1 h-3 w-3" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="flex">
              <select className="bg-gray-200 text-black px-3 py-2 rounded-l border-0 text-sm">
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <Input
                type="text"
                placeholder="Search Amazon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-0 rounded-none focus:ring-0 focus:border-0"
              />
              <Button className="amazon-button-primary rounded-r rounded-l-none px-4">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            {/* Language */}
            <div className="flex items-center cursor-pointer hover:bg-white/10 p-2 rounded">
              <span className="text-sm">EN</span>
              <ChevronDown className="ml-1 h-3 w-3" />
            </div>

            {/* Account */}
            <div 
              className="relative cursor-pointer hover:bg-white/10 p-2 rounded"
              onClick={() => setShowAccountDropdown(!showAccountDropdown)}
            >
              <div className="text-xs">Hello, sign in</div>
              <div className="flex items-center">
                <span className="text-sm font-bold">Account & Lists</span>
                <ChevronDown className="ml-1 h-3 w-3" />
              </div>
            </div>

            {/* Returns & Orders */}
            <Link to="/gp/your-account/order-history" className="hover:bg-white/10 p-2 rounded">
              <div className="text-xs">Returns</div>
              <div className="text-sm font-bold">& Orders</div>
            </Link>

            {/* Cart */}
            <Link to="/gp/cart/view.html" className="flex items-center hover:bg-white/10 p-2 rounded relative">
              <ShoppingCart className="h-8 w-8" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amazon-orange text-black text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="ml-2 text-sm font-bold">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-amazon-dark-blue border-t border-gray-600 px-4 py-2">
        <div className="flex items-center space-x-6 max-w-7xl mx-auto">
          <Button variant="ghost" className="text-white hover:bg-white/10 p-2">
            All
          </Button>
          <Link to="/gp/goldbox" className="text-sm hover:underline">Today's Deals</Link>
          <Link to="/gp/css/homepage.html" className="text-sm hover:underline">Customer Service</Link>
          <Link to="/gift-cards" className="text-sm hover:underline">Gift Cards</Link>
          <Link to="/s?k=registry" className="text-sm hover:underline">Registry</Link>
          <Link to="/s?k=sell" className="text-sm hover:underline">Sell</Link>
        </div>
      </div>
    </header>
  );
};

export default AmazonHeader;
