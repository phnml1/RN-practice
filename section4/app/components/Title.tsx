import { ReactNode } from "react"
import { StyleSheet, Text } from "react-native"
function Title({children}: {children :ReactNode}) {
  return <Text style={styles.title}>{children}</Text>
}
export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d17206',
    padding: 12,
    textAlign: 'center',
    borderWidth:2,
    borderColor: '#d17206',
  }
})
