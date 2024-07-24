import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../constants/Colors";
import { useContext, useState } from "react";
import { ExpenseContext } from "../store/context";

function CreateExpense({ navigation }: { navigation: any }) {
  const { expenses, addExpense } = useContext(ExpenseContext);

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  function handleCreate() {
    if (!description || !date || !amount) return;
    const data = {
      id: Math.floor(Math.random() + Math.random() * 5),
      description,
      date,
      amount: Number(amount),
    };
    addExpense(data);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <View style={styles.formHorizontalInput}>
          <Text>Description:</Text>
          <TextInput
            style={styles.input}
            defaultValue={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.formHorizontalInput}>
          <Text>Date:</Text>
          <TextInput
            style={styles.input}
            defaultValue={date}
            onChangeText={(text) => setDate(text)}
          />
        </View>
        <View style={styles.formHorizontalInput}>
          <Text>Amount:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            defaultValue={amount}
            onChangeText={(text) => setAmount(text)}
          />
        </View>
      </View>
      <View style={styles.btnsContainer}>
        <Pressable style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </Pressable>
        <Pressable style={styles.updateBtn} onPress={handleCreate}>
          <Text style={styles.updateBtnText}>Create</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  formBox: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 12,
    marginTop: 28,
    marginBottom: 10,
  },
  formHorizontalInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 12,
  },
  input: {
    borderBottomColor: Colors.lightblue,
    borderBottomWidth: 2,
    flex: 1,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
    marginVertical: 10,
    borderBottomWidth: 5,
    borderBottomColor: Colors.white,
    paddingBottom: 18,
  },
  cancelBtn: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: Colors.blue,
    borderRadius: 6,
  },
  cancelBtnText: {
    color: Colors.blue,
  },
  updateBtn: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: Colors.blue,
  },
  updateBtnText: {
    color: Colors.white,
  },
});

export default CreateExpense;
