import { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { EachExpense } from "../store/context";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ data }: { data: EachExpense[] }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(dataItem) => <ExpenseItem data={dataItem.item} />}
        keyExtractor={(data) => `${data.id}`}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // gap: 8,
  },
});

export default ExpenseList;
