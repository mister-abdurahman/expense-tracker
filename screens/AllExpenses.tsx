import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import SubHeader from "../components/ExpensesOuput/SubHeader";
import ExpenseList from "../components/ExpensesOuput/ExpenseList";
import ExpenseItem from "../components/ExpensesOuput/ExpenseItem";
import { ExpenseContext } from "../store/context";
import { useContext, useLayoutEffect } from "react";
import Entypo from "@expo/vector-icons/Entypo";

function AllExpenses({ navigation }: { navigation: any }) {
  const { expenses } = useContext(ExpenseContext);

  useLayoutEffect(function () {
    navigation.setOptions({
      headerRight: () => (
        <Entypo
          name="plus"
          size={30}
          color={Colors.white}
          onPress={() => navigation.navigate("ManageExpense")}
        />
      ),
    });
  }, []);

  const total = expenses.reduce((acc, cur) => acc + cur.amount, 0).toFixed(2);

  return (
    <View style={styles.screen}>
      <SubHeader filterText="Total" amount={Number(total)} />
      {expenses.length ? (
        <ExpenseList data={expenses} />
      ) : (
        <Text style={styles.noExpenseMsg}>No Expense To display</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.darkblue,
    paddingHorizontal: 24,
    paddingVertical: 14,
    flex: 1,
  },
  noExpenseMsg: {
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.blue,
  },
});

export default AllExpenses;
