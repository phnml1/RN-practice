import Colors from "@/app/constants/colors";
import { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";

function InstructionText({children, style}:{children: ReactNode, style:any}) {
  // 뒤에서 앞으로 읽음
  return <Text style = {[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;
const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});