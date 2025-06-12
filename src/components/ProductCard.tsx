
import { useState } from 'react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  prime: boolean;
}

interface ProductCardProps {
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard = ({ product, className = '', style }: ProductCardProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  const { addItem } = useCart();
  
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-amazon-yellow">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-amazon-yellow">☆</span>);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }
    
    return stars;
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover-lift ${className}`} style={style}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onLoad={() => setImageLoading(false)}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              -{discount}%
            </span>
          )}
          {product.prime && (
            <span className="gradient-blue-purple text-white px-2 py-1 rounded text-xs font-bold">
              Prime
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-amazon-purple font-medium">{product.category}</span>
        </div>
        
        <h3 className="font-semibold text-amazon-text-dark mb-2 line-clamp-2 group-hover:text-amazon-purple transition-colors">
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-amazon-text-dark">
            ${product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full gradient-yellow-orange hover-glow text-amazon-dark-blue font-semibold transition-all duration-300"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
