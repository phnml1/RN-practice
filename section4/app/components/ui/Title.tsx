import { ReactNode } from "react"
import { StyleSheet, Text } from "react-native"
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
    textAlign: 'center',
    borderWidth:2,
    borderColor: 'white',
  }
})
