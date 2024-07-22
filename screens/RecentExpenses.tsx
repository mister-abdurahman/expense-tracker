import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";
import { useContext, useLayoutEffect } from "react";
import SubHeader from "../components/SubHeader";
import ExpenseItem from "../components/ExpenseItem";
import ExpenseList from "../components/ExpenseList";
import { ExpenseContext } from "../store/context";
import Entypo from "@expo/vector-icons/Entypo";

function RecentExpenses({ navigation }) {
  const { expenses } = useContext(ExpenseContext);
  useLayoutEffect(function () {
    navigation.setOptions({
      headerRight: () => <Entypo name="plus" size={30} color={Colors.white} />,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <SubHeader filterText="Last 7 Days" price={45.5} />
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

export default RecentExpenses;
