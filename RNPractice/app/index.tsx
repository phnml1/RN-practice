import { StatusBar } from "expo-status-bar";
import {  useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import React from "react";

interface courseGoal {
  text: string;
  id: string;
}
export default function App() {
  const [courseGoals, setCourseGoals] = useState<courseGoal[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function onAddGoal(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler() 
  }
  function deleteGoalHandler(id: string) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
    <View style={styles.appContainer}>
      {/* 버튼에는 정해진스타일이 있어서 만일 자유롭게 스타일링하고싶으면 Pressable사용용 */}
      <Button
        title="Add New Goal"
        color={"#a065ec"}
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && <GoalInput visible = {modalIsVisible} onAddGoal={onAddGoal} onCancelGoal={endAddGoalHandler}/>}
      <View style={styles.goalsContainer}>
        {/* view에 안하고 text에 적용하면 ios에 둥근모서리 적용x */}
        {/* <ScrollView> */}
        {/* FlatList는 좀더최적화에유리(화면에 보여야 로딩 및 렌더링)
        key라고하면 FlatList가 key를 자동적으로 판별 
        keyExtractor로 key추출가능
        */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
                text={itemData.item.text}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
        {/* </ScrollView> */}
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
