import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealsList( { itemsData } ) {
  function renderMealItem( { item } ) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    }
    return <MealItem { ...mealItemProps } />
  }

  return (
    <View style={ styles.container }>
      <FlatList data={ itemsData } renderItem={ renderMealItem }/>
    </View>
  )
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})