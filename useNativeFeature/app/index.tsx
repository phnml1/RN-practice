import { Text, View } from "react-native";
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react"
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    <>
      <StatusBar style = 'dark' />
      <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = "AllPlaces" component={AllPlaces}/>
            <Stack.Screen name = "AddPlace" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
      </NavigationIndependentTree>
    </>
  );
}
