import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { CartContextValue, CartProviderProps } from './types';

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((service: Service) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.service.id === service.id);

      if (existingItem) {
        return prev.map((item) =>
          item.service.id === service.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prev, { service, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((serviceId: string) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.service.id === serviceId);

      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.service.id === serviceId ? { ...item, quantity: item.quantity - 1 } : item,
        );
      }

      return prev.filter((item) => item.service.id !== serviceId);
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.service.price * item.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, clearCart, total }),
    [cart, addToCart, removeFromCart, clearCart, total],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
};
