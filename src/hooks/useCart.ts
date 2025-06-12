
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// Mock cart API
const fetchCart = async (): Promise<Cart> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const mockCart: Cart = {
    items: [],
    total: 0,
    itemCount: 0
  };
  
  return mockCart;
};

const addToCart = async (item: Omit<CartItem, 'quantity'> & { quantity?: number }): Promise<Cart> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Mock response after adding item
  return {
    items: [{ ...item, quantity: item.quantity || 1 }],
    total: item.price * (item.quantity || 1),
    itemCount: item.quantity || 1
  };
};

const updateCartItem = async (id: number, quantity: number): Promise<Cart> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Mock response after updating
  return {
    items: [],
    total: 0,
    itemCount: 0
  };
};

const removeFromCart = async (id: number): Promise<Cart> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return {
    items: [],
    total: 0,
    itemCount: 0
  };
};

export const useCartQuery = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) => 
      updateCartItem(id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};
