import Input from '../../UI/Input';
import classes from './MealItemsForm.module.css';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const MealItemsForm = (props) => {
    const cartCtx = useContext(CartContext);
    const addItemsToCart = (event) => {
        event.preventDefault();
        const quantity = document.getElementById('amount_'+props.id).value
        cartCtx.addItem({...props.item, quantity: quantity})
    }
    console.log(props)
    return(
        <form className={classes.form}>
            <Input label="Sets" input={{
                id:'amount_'+props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button onClick={addItemsToCart}>+ADD</button>
        </form>
    )
}

export default MealItemsForm;