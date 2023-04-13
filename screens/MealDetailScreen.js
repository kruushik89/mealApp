import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/UI/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favoritesSlice";

// import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen( { route, navigation } ) {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  console.log(favoriteMealsIds);
  const { mealId } = route.params;

  const mealsIsFavorite = favoriteMealsIds.includes(mealId);

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  function changeFavoriteStatusHandler() {
    console.log('assss');
    if (mealsIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton onPress={ changeFavoriteStatusHandler }
                                     icon={ mealsIsFavorite ? "star" : "star-outline" } color="white"/>
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={ styles.rootContainer }>
      <Image source={ { uri: selectedMeal.imageUrl } } style={ styles.image }/>
      <Text style={ styles.title }>This is the meal detail screen ({ mealId })</Text>
      <MealDetails
        duration={ selectedMeal.duration }
        complexity={ selectedMeal.complexity }
        affordability={ selectedMeal.affordability }
        textStyle={ styles.detailText }
      />
      <View style={ styles.listOuterContainer }>
        <View style={ styles.listContainer }>
          <SubTitle>Ingredients</SubTitle>
          <List data={ selectedMeal.ingredients }/>
          <SubTitle>Steps</SubTitle>
          <List data={ selectedMeal.steps }/>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    height: 350,
    width: '100%'
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white"
  },
  detailText: {
    color: "white"
  },
  listOuterContainer: {
    alignItems: "center"
  },
  listContainer: {
    width: "80%"
  }
})