import { useContext } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { EachExpense } from "../../store/context";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ data }: { data: EachExpense[] }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(dataItem) => <ExpenseItem data={dataItem.item} />}
        keyExtractor={(data, index) => `${index}`}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ExpenseList;
