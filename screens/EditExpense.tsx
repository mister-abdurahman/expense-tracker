import { View, Text, StyleSheet, Pressable } from "react-native";

function EditExpense({ route }) {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.btnsContainer}>
        <Pressable style={styles.cancelBtn}>
          <Text>Cancel</Text>
        </Pressable>
        <Pressable style={styles.updateBtn}>
          <Text>Update</Text>
        </Pressable>
      </View>
      <View style={styles.iconContainer}>
        <Text></Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  btnsContainer: {
    flexDirection: "row"
  },
  cancelBtn: {},
  updateBtn: {},
  iconContainer: {},
});

export default EditExpense;
