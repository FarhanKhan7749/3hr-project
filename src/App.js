import React from "react";
import { useState, useEffect } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Modal from "./component/UI/Modal";
import CartProvider from "./store/CartProvider";
//import MealsSummary from "./component/Meals/MealsSummary";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const [ itemList, setItemList] = useState([]);
  
  const addItemList = async (title,discription,largerAmout,midiumAmout,smallAmout,price)=>{
    const itemObj = {
      id:Math.random().toString(),
      title: title,
      price:price,
      discription: discription,
      largerAmout: largerAmout,
      midiumAmout:midiumAmout,
      smallAmout:smallAmout,
    }
    const response = await fetch('https://react-http-backend-72ee6-default-rtdb.firebaseio.com/items.json',{
      method: 'POST',
      body: JSON.stringify(itemObj),
      headers: {
        'Content-Type':'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    setItemList((prevItemList)=>{
      return[
        ...prevItemList,
        {id:Math.random().toString(), 
          title:title,
          discription:discription,
          price:price,
          largerAmout:largerAmout,
          midiumAmout:midiumAmout,
          smallAmout:smallAmout,
        }
      ];
    });
  }

  // useEffect(() => {
  //   fetch('https://react-http-backend-72ee6-default-rtdb.firebaseio.com/items.json')
  //     .then(response => response.json())
  //     .then(data => setItemList(data));
  // }, [addItemList]);

  const showCartHandler = () =>{
    setCartIsShown(true);
  };

  const hideCartHandler = () =>{
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Modal onClick={hideCartHandler}> <Cart onClick ={hideCartHandler}/></Modal>}
      <Header onClick = {showCartHandler}/>
      <main>
        <Meals onAdd={addItemList} list={itemList}></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
