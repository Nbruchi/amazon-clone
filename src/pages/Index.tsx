
import { useState } from 'react';
import AmazonHeader from '../components/AmazonHeader';
import AmazonFooter from '../components/AmazonFooter';
import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';
import DealCarousel from '../components/DealCarousel';
import CategoryGrid from '../components/CategoryGrid';
import { CartProvider } from '../contexts/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <AmazonHeader />
        <main>
          <HeroBanner />
          <div className="max-w-7xl mx-auto px-4 py-6">
            <DealCarousel />
            <CategoryGrid />
            <ProductGrid />
          </div>
        </main>
        <AmazonFooter />
      </div>
    </CartProvider>
  );
};

export default Index;
