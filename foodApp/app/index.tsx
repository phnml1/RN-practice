import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import React from "react";
import MealsOverViewScreen from "@/app/screens/MealsOverViewScreen";
export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: number };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                title: "All Categories",
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                contentStyle: { backgroundColor: "#3f2f25" },
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverViewScreen}
              
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </>
  );
}
