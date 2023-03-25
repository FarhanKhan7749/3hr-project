import React from "react";
//import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // const cartItem = (
  //   <ul className={classes["cart-items"]}>
  //     {cartCtx.items.map((item) => (
  //       <CartItem
  //         key={item.id}
  //         id ={item.id}
  //         name={item.name}
  //         price={item.price}
  //         amount={item.quantity}
  //       ></CartItem>
  //     ))}
  //   </ul>
  // );

  return (
    <React.Fragment>
      {console.log("Cart file is render")}
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.quantity}
          ></CartItem>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
