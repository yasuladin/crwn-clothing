import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
// import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems, toggleCartDropdown } = useContext(CartContext);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const cartIconRef = useRef(document.querySelector('.cart-icon-container'));

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    toggleCartDropdown();
  };

  const handleClickOutside = (event) => {
    // console.log('Dropdown', dropdownRef.current);
    // console.log('CartIcon', cartIconRef.current);
    // console.log('Event Target', event.target);
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      cartIconRef.current &&
      !cartIconRef.current.contains(event.target)
    ) {
      toggleCartDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <CartDropdownContainer ref={dropdownRef}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
