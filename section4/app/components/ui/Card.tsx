import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

function Card({children}:{children:ReactNode}) {
  return (
    <View style = {styles.inputContainer}>
      {children}
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    padding: 16,
    backgroundColor: "#4d0629",
    marginHorizontal: 24, // 가로 마진
    borderRadius: 8,
    elevation: 4, // box shadow android
    //ios 그림자
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
})
export default Card;