import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          {/* <CaretLeft /> */}
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          {/* <CaretRight /> */}
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <div className="remove" onClick={clearItemHandler}>
        {/* <Cross /> */}
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
