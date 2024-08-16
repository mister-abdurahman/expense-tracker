import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function ErrorOverlay({ message }: { message: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>An error occured</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.darkerblue,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  message: {
    textAlign: "center",
  },
});

export default ErrorOverlay;
