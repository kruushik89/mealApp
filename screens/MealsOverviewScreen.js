import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen( { route, navigation } ) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds?.includes(catId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === catId).title;

    navigation.setOptions({
      title: categoryTitle
    })
  }, [catId, navigation])

  return <MealsList itemsData={displayedMeals}/>
}

export default MealsOverviewScreen;