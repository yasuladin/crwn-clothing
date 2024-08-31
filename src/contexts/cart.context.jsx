import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// const updateCartItemQuantity = (cartItems, updatedItem) => {
//   const newCartItems = cartItems.map((cartItem) =>
//     cartItem.id == updatedItem.id
//       ? { ...cartItem, quantity: updatedItem.quantity }
//       : cartItem
//   );
//   return newCartItems;
// };

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    const isConfirmed = window.confirm(
      'Do you want to remove this item from the cart?'
    );
    if (isConfirmed) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    }
    return cartItems;
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  // updateQuantity: () => {},
  totalPrice: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, CartItem) => {
      return total + CartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // const updateQuantity = (updatedItem) => {
  //   if (updatedItem.quantity <= 0) {
  //     const isConfirmed = window.confirm(
  //       'Do you want to remove this product from the cart?'
  //     );
  //     if (isConfirmed) {
  //       return removeItem(updatedItem.id);
  //     }
  //     return;
  //   }
  //   setCartItems(updateCartItemQuantity(cartItems, updatedItem));
  // };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
    );
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    // updateQuantity,
    totalPrice,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
