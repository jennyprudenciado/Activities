import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AppContext = createContext(null);

export const SAMPLE_PRODUCTS = [
  { id: '1', name: 'Espresso Beans (250g)', price: 12.5 },
  { id: '2', name: 'Ceramic Pour-Over Dripper', price: 24.0 },
  { id: '3', name: 'Stainless Gooseneck Kettle', price: 45.0 },
  { id: '4', name: 'Reusable Glass Tumbler', price: 16.0 },
];

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const triggerSavingIndicator = () => {
    setIsUpdating(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setIsUpdating(false);
    }, 1000);
  };

  const addToCart = (product) => {
    triggerSavingIndicator();
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    triggerSavingIndicator();
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    triggerSavingIndicator();
    setCart([]);
  };

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        products: SAMPLE_PRODUCTS,
        cart,
        totalCount,
        totalPrice,
        isUpdating,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};