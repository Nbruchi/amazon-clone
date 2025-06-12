
import { useState, useEffect } from 'react';

// Mock data service (placeholder for PostgreSQL integration)
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

// This hook will eventually connect to PostgreSQL database
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call to PostgreSQL database
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // TODO: Replace with actual PostgreSQL query
        // const response = await fetch('/api/products');
        // const data = await response.json();
        
        // Mock data for now
        const mockProducts: Product[] = [
          {
            id: 1,
            title: 'Wireless Bluetooth Headphones',
            price: 79.99,
            originalPrice: 129.99,
            rating: 4.5,
            reviews: 1243,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
            category: 'Electronics',
            prime: true,
          },
          // Add more mock products here...
        ];
        
        setProducts(mockProducts);
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

// Hook for fetching products by category
export const useProductsByCategory = (category: string) => {
  const { products, loading, error } = useProducts();
  const filteredProducts = products.filter(product => 
    category === 'All' || product.category === category
  );
  
  return { products: filteredProducts, loading, error };
};

// Hook for searching products
export const useSearchProducts = (query: string) => {
  const { products, loading, error } = useProducts();
  const searchResults = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return { products: searchResults, loading, error };
};
