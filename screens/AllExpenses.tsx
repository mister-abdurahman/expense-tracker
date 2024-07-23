import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import SubHeader from "../components/SubHeader";
import ExpenseList from "../components/ExpenseList";
import ExpenseItem from "../components/ExpenseItem";
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

  const total = expenses.reduce((acc, cur) => acc + cur.price, 0).toFixed(2);

  return (
    <View style={styles.screen}>
      <SubHeader filterText="Total" price={Number(total)} />
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
