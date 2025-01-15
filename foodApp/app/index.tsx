import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import React from "react";
import MealsOverViewScreen from "@/screens/MealsOverViewScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
            <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </>
  );
}
