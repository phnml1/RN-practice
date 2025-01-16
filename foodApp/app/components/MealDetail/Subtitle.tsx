import { View, Text, StyleSheet } from "react-native";

export function Subtitle({children}:{children:React.ReactNode}) {
  return (  <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Steps</Text>
        </View>)
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 6,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
})