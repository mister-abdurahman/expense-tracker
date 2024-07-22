import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import SubHeader from "../components/SubHeader";
import ExpenseList from "../components/ExpenseList";
import ExpenseItem from "../components/ExpenseItem";
import { ExpenseContext } from "../store/context";
import { useContext } from "react";

function AllExpenses() {
  const { expenses } = useContext(ExpenseContext);
  return (
    <View style={styles.screen}>
      <SubHeader filterText="Total" price={450.2} />
      <ExpenseList data={expenses} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.lightblue,
    paddingHorizontal: 24,
    paddingVertical: 14,
    flex: 1,
  },
});

export default AllExpenses;
