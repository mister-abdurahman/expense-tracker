import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import SubHeader from "../components/ExpensesOuput/SubHeader";
import ExpenseList from "../components/ExpensesOuput/ExpenseList";
import ExpenseItem from "../components/ExpensesOuput/ExpenseItem";
import { EachExpense, ExpenseContext } from "../store/context";
import { useContext, useEffect, useLayoutEffect } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { getExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function AllExpenses({ navigation }: { navigation: any }) {
  const {
    expenses,
    setExpensesToRemote,
    setIsLoading,
    isLoading,
    errorMsg,
    setErrorMsg,
  } = useContext(ExpenseContext);

  useEffect(function () {
    async function fetchExpense() {
      try {
        setIsLoading(true);
        const data = await getExpenses();
        setExpensesToRemote(data);
      } catch (error) {
        console.log(error);
        setErrorMsg(error?.message);
      } finally {
        setIsLoading(false);
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

  const total = expenses.reduce((acc, cur) => acc + cur.amount, 0).toFixed(2);

  if (isLoading) return <LoadingOverlay />;
  if (errorMsg && !isLoading) return <ErrorOverlay message={errorMsg} />;

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
    color: Colors.white,
  },
});

export default AllExpenses;
