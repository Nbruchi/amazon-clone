
import { useState } from 'react';
import { Search, ShoppingCart, ChevronDown, MapPin, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useCart } from '../contexts/CartContext';
import CategoriesSheet from './CategoriesSheet';

const AmazonHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showCategoriesSheet, setShowCategoriesSheet] = useState(false);
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
    'Toys & Games',
    'Health & Personal Care',
    'Beauty & Personal Care',
    'Automotive',
    'Industrial & Scientific'
  ];

  return (
    <>
      <header className="bg-amazon-dark-blue text-white">
        {/* Top Navigation */}
        <div className="px-2 py-1">
          <div className="flex items-center justify-between max-w-full mx-auto">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:border hover:border-white p-1">
              <div className="flex flex-col">
                <div className="text-xl font-bold tracking-tight">
                  amazon
                </div>
                <div className="text-xs -mt-1 text-amazon-orange">.com</div>
              </div>
            </Link>

            {/* Deliver to */}
            <div 
              className="hidden md:flex flex-col cursor-pointer hover:border hover:border-white p-1"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            >
              <div className="text-xs text-gray-300 flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                Deliver to
              </div>
              <div className="flex items-center text-sm font-bold">
                <span>United States</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-2">
              <div className="flex rounded overflow-hidden">
                <select className="bg-gray-200 text-black px-2 py-2 text-sm border-r-2 border-amazon-orange focus:outline-none">
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                <Input
                  type="text"
                  placeholder="Search Amazon"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 rounded-none focus:ring-0 focus:border-0 py-2"
                />
                <Button className="amazon-button-primary rounded-none px-4 py-2">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-2">
              {/* Language */}
              <div className="hidden lg:flex items-center cursor-pointer hover:border hover:border-white p-1">
                <span className="text-sm font-bold">EN</span>
                <ChevronDown className="ml-1 h-3 w-3" />
              </div>

              {/* Account */}
              <Link 
                to="/signin"
                className="cursor-pointer hover:border hover:border-white p-1"
                onClick={() => setShowAccountDropdown(!showAccountDropdown)}
              >
                <div className="text-xs">Hello, sign in</div>
                <div className="flex items-center text-sm font-bold">
                  <span>Account & Lists</span>
                  <ChevronDown className="ml-1 h-3 w-3" />
                </div>
              </Link>

              {/* Returns & Orders */}
              <Link to="/gp/your-account/order-history" className="hover:border hover:border-white p-1">
                <div className="text-xs">Returns</div>
                <div className="text-sm font-bold">& Orders</div>
              </Link>

              {/* Cart */}
              <Link to="/gp/cart/view.html" className="flex items-center hover:border hover:border-white p-1 relative">
                <div className="relative">
                  <ShoppingCart className="h-8 w-8" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amazon-orange text-black text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </div>
                <span className="ml-2 text-sm font-bold">Cart</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-amazon-dark-blue border-t border-gray-600 px-2 py-1">
          <div className="flex items-center space-x-4 max-w-full mx-auto text-sm">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 p-2 flex items-center"
              onClick={() => setShowCategoriesSheet(true)}
            >
              <Menu className="h-4 w-4 mr-2" />
              All
            </Button>
            <Link to="/gp/goldbox" className="hover:underline hover:bg-white/10 p-1 rounded">Today's Deals</Link>
            <Link to="/gp/css/homepage.html" className="hover:underline hover:bg-white/10 p-1 rounded">Customer Service</Link>
            <Link to="/gp/registry/search" className="hover:underline hover:bg-white/10 p-1 rounded">Registry</Link>
            <Link to="/gift-cards" className="hover:underline hover:bg-white/10 p-1 rounded">Gift Cards</Link>
            <Link to="/gp/browse.html?node=468642" className="hover:underline hover:bg-white/10 p-1 rounded">Sell</Link>
            <Link to="/amazonprime" className="hover:underline hover:bg-white/10 p-1 rounded">Prime</Link>
            <Link to="/gp/bestsellers" className="hover:underline hover:bg-white/10 p-1 rounded">Best Sellers</Link>
            <Link to="/gp/new-releases" className="hover:underline hover:bg-white/10 p-1 rounded">New Releases</Link>
            <Link to="/gp/movers-and-shakers" className="hover:underline hover:bg-white/10 p-1 rounded">Movers & Shakers</Link>
          </div>
        </div>
      </header>

      <CategoriesSheet 
        open={showCategoriesSheet} 
        onOpenChange={setShowCategoriesSheet}
      />
    </>
  );
};

export default AmazonHeader;
