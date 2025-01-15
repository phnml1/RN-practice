import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";


function CategoriesScreen({navigation}) {
  console.log(navigation);
  function renderCategoryItem(itemData:{item : {id:string; color:string; title:string}}) {
    function PressHandler() {
      navigation.navigate('MealsOverview');
    }
    return <CategoryGridTitle title={itemData.item.title} color= {itemData.item.color} onPress = {PressHandler}/>; 
  }
  return (<>
  <FlatList numColumns={2} keyExtractor={(item) => item.id} data = {CATEGORIES} renderItem={renderCategoryItem}/>
  </>);
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})