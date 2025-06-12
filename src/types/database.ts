
// PostgreSQL Database Schema Types (Placeholder for future integration)

export interface User {
  id: number;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  created_at: Date;
  updated_at: Date;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  original_price?: number;
  category_id: number;
  image_url: string;
  stock_quantity: number;
  rating: number;
  review_count: number;
  is_prime: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  icon: string;
  created_at: Date;
  updated_at: Date;
}

export interface Order {
  id: number;
  user_id: number;
  total_amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address: string;
  created_at: Date;
  updated_at: Date;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  created_at: Date;
}

export interface Review {
  id: number;
  product_id: number;
  user_id: number;
  rating: number;
  title: string;
  comment: string;
  created_at: Date;
  updated_at: Date;
}

export interface CartItem {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;
}

// Database connection placeholder
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
