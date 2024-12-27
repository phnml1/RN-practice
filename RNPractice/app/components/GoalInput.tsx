import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

interface GoalInputProps {
  visible: boolean;
  onAddGoal: (enteredGoalText: string) => void;
  onCancelGoal: () => void;
}
export const GoalInput = ({
  visible,
  onAddGoal,
  onCancelGoal,
}: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");
  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style = {styles.image} source = {require('../../assets/images/goal.png')} />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color = '#b180f0'/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancelGoal} color = '#'/>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: '#120438',
    borderRadius:6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width:100,
    height:100,
    margin:20
  }
});
