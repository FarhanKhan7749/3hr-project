import React, { useState } from "react";
// import PlayButton from "../Cart/PlayButtonIcon";
import classes from './MealsSummary.module.css';
const MealsSummary = (props) => {
    const [enteredTitle, setEnterdtitle] = useState('');
    const [enterDiscription, setDEnterDiscription] = useState('');
    const [price, setPrice] = useState(0);
    const [largeAmount, setLargeAmount] = useState(0);
    const [midiumAmout, setMidiumAmount] = useState(0);
    const [smallAmount, setSmallAmount] = useState(0);

    const addTitleListHandler = (event) => {
        setEnterdtitle(event.target.value)
    }

    const addDiscriptionHandler = (event) => {
        setDEnterDiscription(event.target.value)
    }

    const addPrieceHandler = (event) => {
        setPrice(event.target.value)
    }

    const addLargerAmoutHandler = (event) => {
        setLargeAmount(event.target.value)
    }

    const addMidiumAmoutHandler = (event) => {
        setMidiumAmount(event.target.value)
    }

    const addSmallAmoutHandler = (event) => {
        setSmallAmount(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAdd(enteredTitle, enterDiscription, largeAmount, midiumAmout, smallAmount, price);
    }
    return (
        <section className={classes.summary}>
            <form className={classes.form} onSubmit={submitHandler}>
                <div>
                    <label className={classes.label}>T-shirt Name</label>
                    <input id="title" type="text" value={enteredTitle} onChange={addTitleListHandler}></input>
                    <label className={classes.label}>Discription</label>
                    <input id="discription" type="text" value={enterDiscription} onChange={addDiscriptionHandler}></input>
                </div>
                <div>
                    <label className={classes.label}>Price</label>
                    <input id="price" type="Number" value={price} onChange={addPrieceHandler}></input>
                </div>
                <div>
                    <label className={classes.label}>L</label>
                    <input id="large" type="Number" value={largeAmount} onChange={addLargerAmoutHandler}></input>
                    <label className={classes.label}>M</label>
                    <input id="Small" type="Number" value={midiumAmout} onChange={addMidiumAmoutHandler}></input>
                    <label className={classes.label}>S</label>
                    <input id="Small" type="Number" value={smallAmount} onChange={addSmallAmoutHandler}></input>
                </div>
                <div>
                    <button type="submit" className={classes.Button} >Public</button>
                </div>
            </form>
        </section>
    )
}

export default MealsSummary;