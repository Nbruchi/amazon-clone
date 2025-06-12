
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Categories from '../components/Categories';
import CartSidebar from '../components/CartSidebar';
import { CartProvider } from '../contexts/CartContext';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-amazon-light-gray">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <Categories />
        <ProductGrid />
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
