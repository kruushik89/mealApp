import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from 'react-redux'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  function BottomTabNavigator() {
    return (
      <BottomTab.Navigator
        screenOptions={ {
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3F2F25' }
        } }
      >
        <BottomTab.Screen
          name='Categories'
          component={ CategoriesScreen }
          options={ {
            title: 'All categories',
            tabBarIcon: ( { color, size } ) => (
              <Ionicons name="home" color={ color } size={ size }/>
            ),
          } }
        />
        <BottomTab.Screen
          name='Favorites'
          component={ FavoritesScreen }
          options={ {
            title: 'Favorites meals',
            tabBarIcon: ( { color, size } ) => (
              <Ionicons name="star" color={ color } size={ size }/>
            ),
          } }
        />
      </BottomTab.Navigator>
    )
  }

  return (
    <>
      <StatusBar style="light"/>
      {/*<FavoriteContextProvider>*/ }
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={ {
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3F2F25' }
            } }
          >
            <Stack.Screen
              name="DrawerScreen"
              component={ BottomTabNavigator }
              options={ {
                headerShown: false,
              } }
            />
            <Stack.Screen name="MealsOverview" component={ MealsOverviewScreen }/>
            <Stack.Screen
              name="MealDetail"
              component={ MealDetailScreen }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoriteContextProvider>*/ }
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
