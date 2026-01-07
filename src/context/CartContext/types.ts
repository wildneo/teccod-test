import type { ReactNode } from 'react';

export type CartContextValue = {
  cart: CartItem[];
  addToCart: (service: Service) => void;
  removeFromCart: (serviceId: string) => void;
  clearCart: () => void;
  total: number;
};

export type CartProviderProps = {
  children?: ReactNode;
};
