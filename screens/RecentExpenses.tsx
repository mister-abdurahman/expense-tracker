import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";
import { useContext, useEffect, useLayoutEffect } from "react";
import SubHeader from "../components/ExpensesOuput/SubHeader";
import ExpenseItem from "../components/ExpensesOuput/ExpenseItem";
import ExpenseList from "../components/ExpensesOuput/ExpenseList";
import { ExpenseContext } from "../store/context";
import Entypo from "@expo/vector-icons/Entypo";
import { getDateMinusDays } from "../utils/formatDate";
import { getExpenses } from "../utils/http";

function RecentExpenses({ navigation }) {
  const { expenses, setExpensesToRemote } = useContext(ExpenseContext);

  useEffect(function () {
    async function fetchExpense() {
      try {
        const data = await getExpenses();
        setExpensesToRemote(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchExpense();
  }, []);

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

  const recentExpenses = expenses.filter((exp) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return exp.date > date7DaysAgo;
  });

  return (
    <View style={styles.screen}>
      <SubHeader filterText="Last 7 Days" amount={45.5} />
      {recentExpenses.length ? (
        <ExpenseList data={recentExpenses} />
      ) : (
        <Text style={styles.noExpenseMsg}>
          No Expense registerd since the past 7 days
        </Text>
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
    color: Colors.white,
  },
});

export default RecentExpenses;
