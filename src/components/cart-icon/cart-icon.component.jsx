import ShoppingIcon from '../../assets/shopping-bag.svg?react';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const handleClick = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
