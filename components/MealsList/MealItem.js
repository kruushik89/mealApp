import { Pressable, Text, View, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem( { id, title, imageUrl, duration, complexity, affordability } ) {
  const navigation = useNavigation();

  function mealDetailRedirect() {
    navigation.navigate('MealDetail', {
      mealId: id
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={ { color: "ccc" } }
        style={ ( { pressed } ) => pressed ? styles.buttonPressed : null }
        onPress={mealDetailRedirect}
      >
        <View style={styles.innerContainer}>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{ title }</Text>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    elevation: 4, //shadow for android
    backgroundColor: 'white', // we can see shadow in IOS
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: '100%',
    height: 200
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8
  },
  buttonPressed: {
    opacity: 0.5
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    columnGap: 5
  },
  detailItem: {
    fontSize: 12
  }
})