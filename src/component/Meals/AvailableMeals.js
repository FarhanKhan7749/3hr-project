import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealsItems from './MealItems/MealItems';


const AvailableMeals = (props) => {
  const mealsList = props.list.map((item) =>
    <MealsItems
      id={item.id}
      key={item.id}
      name={item.title}
      description={item.discription}
      lAmount = {item.largerAmout}
      mAmount = {item.midiumAmout}
      sAmount = {item.smallAmout}
      price={item.price}
    />
  );
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
};

export default AvailableMeals;