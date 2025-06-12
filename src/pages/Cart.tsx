
import AmazonHeader from '../components/AmazonHeader';
import AmazonFooter from '../components/AmazonFooter';
import { CartProvider } from '../contexts/CartContext';

const Cart = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <AmazonHeader />
        <main className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-amazon-text mb-4">Shopping Cart</h1>
            <p className="text-amazon-gray">Shopping cart page coming soon...</p>
          </div>
        </main>
        <AmazonFooter />
      </div>
    </CartProvider>
  );
};

export default Cart;
