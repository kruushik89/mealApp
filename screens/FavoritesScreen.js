import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const { ids } = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

  return <MealsList itemsData={ favoriteMeals }/>
}

export default FavoritesScreen;