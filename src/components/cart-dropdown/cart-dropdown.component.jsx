import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
// import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      {/* <Link
        to="/checkout"
        onClick={() => setIsCartOpen(false)}
        className="link-to-checkout"
      > */}
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      {/* </Link> */}
    </div>
  );
};

export default CartDropdown;
