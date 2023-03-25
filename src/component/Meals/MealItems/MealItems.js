import classes from './MealItems.module.css';
import MealItemsForm from './MealItemsForm';
const MealsItems = (props) => {
    console.log(props)
    //const price = `$${props.price.toFixed(2)}`;
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>Price {props.price}</div>
                <div className={classes.price}>Large {props.lAmount}x, Midium {props.mAmount}x, Small {props.sAmount}x</div>
            </div>
            <div>
                <MealItemsForm id={props.id} item={props}></MealItemsForm>
            </div>
        </li>
    )
}

export default MealsItems;