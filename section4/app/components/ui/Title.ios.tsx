import { ReactNode } from "react"
import { StyleSheet, Text, Platform } from "react-native"
function Title({children}: {children :ReactNode}) {
  return <Text style={styles.title}>{children}</Text>
}
export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    padding: 12,
    maxWidth:'80%',
    width: 300,
    textAlign: 'center',
    // borderWidth:Platform.OS === 'android' ? 2: 0,
    // borderWidth: Platform.select({ios:0, android:2}),
    borderWidth:0,
    borderColor: 'white',
  }
})
