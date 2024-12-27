import { StyleSheet, View, Text, Pressable } from "react-native";
interface GoalItemProps {
  text: string;
  onDeleteItem: (id: string) => void;
  id: string;
}
export const GoalItem = ({ id, text, onDeleteItem }: GoalItemProps) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, id)}
        style = {({pressed}) => pressed && styles.pressedItem}
       
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
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
    padding: 8,
  },
  pressedItem: {
    opacity:0.5,
  }
});
