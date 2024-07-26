import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../constants/Colors";
import { useContext, useLayoutEffect, useState } from "react";
import { EachExpense, ExpenseContext } from "../store/context";
import Button from "../components/UI/Button";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense } from "../utils/http";

function ManageExpense({ route, navigation }) {
  const { expenses, updateExpense, removeExpense, addExpense } =
    useContext(ExpenseContext);
  const id = route.params?.id;

  const isEditing = !!id;

  const expense = expenses.find((exp) => exp.id === id);

  useLayoutEffect(function () {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Create Expense",
    });
  }, []);

  async function handleDelete() {
    await deleteExpense(id);
    removeExpense(id);
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>Your Expense</Text>
      <ExpenseForm isEditing={isEditing} defaultValue={expense} />
      {isEditing && (
        <View style={styles.iconContainer}>
          <AntDesign
            name="delete"
            size={36}
            color={"red"}
            onPress={handleDelete}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    marginTop: 24,
  },
  subHeader: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: Colors.slate,
    marginVertical: 16,
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
  iconContainer: {
    alignItems: "center",
  },
});

export default ManageExpense;
