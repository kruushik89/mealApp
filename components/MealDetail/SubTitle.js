import { Text, View, StyleSheet } from "react-native";

function SubTitle({children}) {
  return(
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{ children }</Text>
    </View>
  )
}

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 6,
    color: "#e2b497",
    textAlign: "center"
  },
  subTitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 6,
    margin: 4,
    marginHorizontal: 12
  }
})