
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

// Mock auth API
const getCurrentUser = async (): Promise<User | null> => {
  const token = localStorage.getItem('auth_token');
  if (!token) return null;
  
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    avatar: '/placeholder.svg'
  };
};

const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const response: AuthResponse = {
    user: {
      id: '1',
      email: credentials.email,
      name: 'John Doe'
    },
    token: 'mock_jwt_token'
  };
  
  localStorage.setItem('auth_token', response.token);
  return response;
};

const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const response: AuthResponse = {
    user: {
      id: '1',
      email: credentials.email,
      name: credentials.name
    },
    token: 'mock_jwt_token'
  };
  
  localStorage.setItem('auth_token', response.token);
  return response;
};

const logout = async (): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  localStorage.removeItem('auth_token');
};

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: getCurrentUser,
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(['auth'], data.user);
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      queryClient.setQueryData(['auth'], data.user);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(['auth'], null);
      queryClient.removeQueries({ queryKey: ['cart'] });
    },
  });
};
