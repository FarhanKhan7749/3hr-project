import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) =>{
    return(
        <React.Fragment>
            <MealsSummary onAdd = {props.onAdd}/>
            <AvailableMeals list = {props.list}/>
        </React.Fragment>
    )
}

export default Meals;