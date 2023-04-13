import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen( { navigation } ) {
  function renderCategoryItem( { item } ) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: item.id
      });
    }

    return <CategoryGridTile title={ item.title } color={ item.color } onPress={pressHandler} />;
  }

  // FlatList add scroll screen
  return <FlatList
    data={ CATEGORIES }
    keyExtractor={ ( item ) => item.id }
    renderItem={ renderCategoryItem }
    numColumns={ 2 }
  />;
}

export default CategoriesScreen;