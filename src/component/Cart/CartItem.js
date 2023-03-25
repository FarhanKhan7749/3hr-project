import { useContext } from 'react';
import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
  //const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);
  {console.log("Cart item file is render")}
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={()=> ctx.removeItem({...props})}>−</button>
        <button onClick={()=> ctx.addItem({...props})}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
