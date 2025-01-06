import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function Index() {
  const [userNumber, setUserNumber] = useState<number>();
  function pickedNumberHandler(pickedNumber:number) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler}/>
  if(userNumber) {
    screen = <GameScreen/>
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      {/* image + view */}
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style = {styles.rootScreen}
        imageStyle= {styles.backgroundImage}
      >
        {/* 위에 튀어나온 부분(노치) 등을 고려하여 보여줌줌 */}
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
