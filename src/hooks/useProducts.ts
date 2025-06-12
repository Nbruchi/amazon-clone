
import { useQuery } from '@tanstack/react-query';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// Mock API calls - replace with real API endpoints
const fetchProducts = async (category?: string, search?: string): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const mockProducts: Product[] = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      price: 1199.99,
      description: "Latest iPhone with advanced camera system",
      category: "electronics",
      image: "/placeholder.svg",
      rating: { rate: 4.5, count: 1234 }
    },
    {
      id: 2,
      title: "MacBook Air M2",
      price: 999.99,
      description: "Powerful laptop with M2 chip",
      category: "computers",
      image: "/placeholder.svg",
      rating: { rate: 4.7, count: 856 }
    },
    {
      id: 3,
      title: "AirPods Pro (2nd generation)",
      price: 249.99,
      description: "Wireless earbuds with active noise cancellation",
      category: "electronics",
      image: "/placeholder.svg",
      rating: { rate: 4.6, count: 2341 }
    },
    // Add more mock products...
  ];

  let filteredProducts = mockProducts;
  
  if (category) {
    filteredProducts = mockProducts.filter(p => p.category === category);
  }
  
  if (search) {
    filteredProducts = mockProducts.filter(p => 
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  return filteredProducts;
};

const fetchProduct = async (id: string): Promise<Product> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const mockProduct: Product = {
    id: parseInt(id),
    title: "iPhone 15 Pro Max",
    price: 1199.99,
    description: "The iPhone 15 Pro Max features a titanium design, A17 Pro chip, and advanced camera system with 5x telephoto zoom.",
    category: "electronics",
    image: "/placeholder.svg",
    rating: { rate: 4.5, count: 1234 }
  };
  
  return mockProduct;
};

export const useProducts = (category?: string, search?: string) => {
  return useQuery({
    queryKey: ['products', category, search],
    queryFn: () => fetchProducts(category, search),
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 200));
      return [
        'electronics',
        'computers',
        'home-kitchen',
        'fashion',
        'books',
        'sports',
        'toys',
        'health'
      ];
    },
  });
};

export const useDeals = () => {
  return useQuery({
    queryKey: ['deals'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 400));
      return [
        {
          id: 1,
          title: "Lightning Deal - 50% off",
          product: "Wireless Headphones",
          originalPrice: 199.99,
          dealPrice: 99.99,
          image: "/placeholder.svg",
          timeLeft: "2h 15m"
        },
        {
          id: 2,
          title: "Deal of the Day",
          product: "Smart Watch",
          originalPrice: 299.99,
          dealPrice: 199.99,
          image: "/placeholder.svg",
          timeLeft: "12h 30m"
        }
      ];
    },
  });
};
