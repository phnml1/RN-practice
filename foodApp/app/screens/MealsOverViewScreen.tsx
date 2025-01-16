import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/app";
import { MEALS, CATEGORIES } from "@/data/dummy-data";
import MealItem from "@/app/components/MealItem";

function MealsOverViewScreen({ navigation }) {
  const route = useRoute();
  const { categoryId } = route.params as RootStackParamList["MealsOverview"];
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  // DOM 업데이트 후, 브라우저가 화면을 그리기 전에 실행
  // 레이아웃 측정, 동기적으로 DOM 조작
  // 동기적으로 실행되므로 성능에 영향을 줄 수 있음
  // 화면이 업데이트된 이후에 타이틀도 바뀌므로 useLayoutEffect를 사용했음
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES!.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId,navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
