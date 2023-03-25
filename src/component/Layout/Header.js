import React from "react";
import classes from './Header.module.css';
import tImage from '../../assets/images.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Shoppers Stop for Tshirts</h1>
                <HeaderCartButton onClick = {props.onClick}/>
            </header>
            <div className={classes['main-image']}>
                <img src={tImage} alt='A table full of food'></img>
            </div>
        </React.Fragment>
    )
}

export default Header;