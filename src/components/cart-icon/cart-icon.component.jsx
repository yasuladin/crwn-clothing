// import ShoppingIcon from '../../assets/shopping-bag.svg?react';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { toggleCartDropdown, cartCount } = useContext(CartContext);

  const handleClick = () => {
    toggleCartDropdown();
  };

  return (
    <CartIconContainer className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
