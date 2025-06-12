
// API utilities for future PostgreSQL integration

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

interface ApiOptions extends RequestInit {
  headers?: Record<string, string>;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  // Product endpoints
  async getProducts(params?: { category?: string; search?: string; page?: number; limit?: number }) {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.append('category', params.category);
    if (params?.search) searchParams.append('search', params.search);
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    
    const query = searchParams.toString();
    return this.request(`/products${query ? `?${query}` : ''}`);
  }

  async getProduct(id: number) {
    return this.request(`/products/${id}`);
  }

  // Category endpoints
  async getCategories() {
    return this.request('/categories');
  }

  // User endpoints
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: { email: string; password: string; firstName: string; lastName: string }) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // Order endpoints
  async createOrder(orderData: any) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async getOrders() {
    return this.request('/orders');
  }

  // Cart endpoints (if using persistent cart)
  async getCart() {
    return this.request('/cart');
  }

  async addToCart(productId: number, quantity: number) {
    return this.request('/cart', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    });
  }

  async updateCartItem(itemId: number, quantity: number) {
    return this.request(`/cart/${itemId}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    });
  }

  async removeFromCart(itemId: number) {
    return this.request(`/cart/${itemId}`, {
      method: 'DELETE',
    });
  }
}

// Export singleton instance
export const apiClient = new ApiClient(API_BASE_URL);

// PostgreSQL connection utilities (for backend)
export const dbQueries = {
  // Product queries
  getAllProducts: `
    SELECT p.*, c.name as category_name 
    FROM products p 
    JOIN categories c ON p.category_id = c.id 
    ORDER BY p.created_at DESC
  `,
  
  getProductById: `
    SELECT p.*, c.name as category_name 
    FROM products p 
    JOIN categories c ON p.category_id = c.id 
    WHERE p.id = $1
  `,
  
  searchProducts: `
    SELECT p.*, c.name as category_name 
    FROM products p 
    JOIN categories c ON p.category_id = c.id 
    WHERE p.title ILIKE '%' || $1 || '%' 
    ORDER BY p.created_at DESC
  `,
  
  getProductsByCategory: `
    SELECT p.*, c.name as category_name 
    FROM products p 
    JOIN categories c ON p.category_id = c.id 
    WHERE c.name = $1 
    ORDER BY p.created_at DESC
  `,
  
  // User queries
  createUser: `
    INSERT INTO users (email, password_hash, first_name, last_name) 
    VALUES ($1, $2, $3, $4) 
    RETURNING id, email, first_name, last_name, created_at
  `,
  
  getUserByEmail: `
    SELECT id, email, password_hash, first_name, last_name 
    FROM users 
    WHERE email = $1
  `,
  
  // Order queries
  createOrder: `
    INSERT INTO orders (user_id, total_amount, status, shipping_address) 
    VALUES ($1, $2, $3, $4) 
    RETURNING id, created_at
  `,
  
  createOrderItem: `
    INSERT INTO order_items (order_id, product_id, quantity, price) 
    VALUES ($1, $2, $3, $4)
  `,
  
  getUserOrders: `
    SELECT o.*, array_agg(
      json_build_object(
        'product_id', oi.product_id,
        'title', p.title,
        'quantity', oi.quantity,
        'price', oi.price
      )
    ) as items
    FROM orders o
    LEFT JOIN order_items oi ON o.id = oi.order_id
    LEFT JOIN products p ON oi.product_id = p.id
    WHERE o.user_id = $1
    GROUP BY o.id
    ORDER BY o.created_at DESC
  `,
};
