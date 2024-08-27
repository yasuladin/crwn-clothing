import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  // items: [],
  setIsCartOpen: () => null,
  // setItems: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [items, setItems] = useState([]);
  const value = {
    isCartOpen,
    setIsCartOpen,
    // items,
    // setItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
