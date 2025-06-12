
import { Link } from 'react-router-dom';

const AmazonFooter = () => {
  return (
    <footer className="bg-amazon-dark-blue text-white mt-12">
      {/* Back to top */}
      <div className="bg-gray-700 hover:bg-gray-600 cursor-pointer">
        <div className="text-center py-4 text-sm">
          Back to top
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-amazon-dark-blue px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Get to Know Us */}
            <div>
              <h3 className="font-bold text-white mb-4">Get to Know Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/careers" className="hover:underline text-gray-300">Careers</Link></li>
                <li><Link to="/blog" className="hover:underline text-gray-300">Blog</Link></li>
                <li><Link to="/about" className="hover:underline text-gray-300">About Amazon</Link></li>
                <li><Link to="/investor-relations" className="hover:underline text-gray-300">Investor Relations</Link></li>
                <li><Link to="/devices" className="hover:underline text-gray-300">Amazon Devices</Link></li>
                <li><Link to="/science" className="hover:underline text-gray-300">Amazon Science</Link></li>
              </ul>
            </div>

            {/* Make Money with Us */}
            <div>
              <h3 className="font-bold text-white mb-4">Make Money with Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/sell" className="hover:underline text-gray-300">Sell products on Amazon</Link></li>
                <li><Link to="/business" className="hover:underline text-gray-300">Sell on Amazon Business</Link></li>
                <li><Link to="/apps" className="hover:underline text-gray-300">Sell apps on Amazon</Link></li>
                <li><Link to="/affiliate" className="hover:underline text-gray-300">Become an Affiliate</Link></li>
                <li><Link to="/advertise" className="hover:underline text-gray-300">Advertise Your Products</Link></li>
                <li><Link to="/publishing" className="hover:underline text-gray-300">Self-Publish with Us</Link></li>
              </ul>
            </div>

            {/* Amazon Payment Products */}
            <div>
              <h3 className="font-bold text-white mb-4">Amazon Payment Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/business-card" className="hover:underline text-gray-300">Amazon Business Card</Link></li>
                <li><Link to="/shop-with-points" className="hover:underline text-gray-300">Shop with Points</Link></li>
                <li><Link to="/reload" className="hover:underline text-gray-300">Reload Your Balance</Link></li>
                <li><Link to="/currency-converter" className="hover:underline text-gray-300">Amazon Currency Converter</Link></li>
              </ul>
            </div>

            {/* Let Us Help You */}
            <div>
              <h3 className="font-bold text-white mb-4">Let Us Help You</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/amazonprime" className="hover:underline text-gray-300">Amazon and COVID-19</Link></li>
                <li><Link to="/account" className="hover:underline text-gray-300">Your Account</Link></li>
                <li><Link to="/orders" className="hover:underline text-gray-300">Your Orders</Link></li>
                <li><Link to="/shipping" className="hover:underline text-gray-300">Shipping Rates & Policies</Link></li>
                <li><Link to="/returns" className="hover:underline text-gray-300">Returns & Replacements</Link></li>
                <li><Link to="/content" className="hover:underline text-gray-300">Manage Your Content and Devices</Link></li>
                <li><Link to="/help" className="hover:underline text-gray-300">Amazon Assistant</Link></li>
                <li><Link to="/help" className="hover:underline text-gray-300">Help</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-gray-800 border-t border-gray-600 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold mr-8">
              amazon<span className="text-amazon-orange">.com</span>
            </Link>
            <div className="flex space-x-6 text-sm">
              <select className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
              </select>
              <select className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1">
                <option>$ USD - U.S. Dollar</option>
                <option>€ EUR - Euro</option>
                <option>£ GBP - British Pound</option>
              </select>
              <select className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-gray-600">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 text-xs text-gray-400">
            <div>
              <Link to="/music" className="hover:underline block mb-2">Amazon Music</Link>
              <p>Stream millions of songs</p>
            </div>
            <div>
              <Link to="/advertising" className="hover:underline block mb-2">Amazon Advertising</Link>
              <p>Find, attract, and engage customers</p>
            </div>
            <div>
              <Link to="/fresh" className="hover:underline block mb-2">Amazon Fresh</Link>
              <p>Groceries & More Right To Your Door</p>
            </div>
            <div>
              <Link to="/audible" className="hover:underline block mb-2">AudibleListen</Link>
              <p>to Books & Original Audio Performances</p>
            </div>
            <div>
              <Link to="/drive" className="hover:underline block mb-2">Amazon Drive</Link>
              <p>Cloud storage from Amazon</p>
            </div>
            <div>
              <Link to="/alexa" className="hover:underline block mb-2">Alexa</Link>
              <p>Actionable Analytics for the Web</p>
            </div>
            <div>
              <Link to="/prime-video" className="hover:underline block mb-2">Prime Video Direct</Link>
              <p>Video Distribution Made Easy</p>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-gray-500">
            <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link to="/conditions" className="hover:underline">Conditions of Use</Link>
              <Link to="/privacy" className="hover:underline">Privacy Notice</Link>
              <Link to="/interest-ads" className="hover:underline">Interest-Based Ads</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AmazonFooter;
