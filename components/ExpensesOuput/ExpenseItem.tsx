import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import { EachExpense } from "../../store/context";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../../utils/formatDate";

function ExpenseItem({ data }: { data: EachExpense }) {
  const { description, amount, date } = data;
  const navigation: any = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [
        styles.pressable_box,
        pressed ? { opacity: 0.65 } : null,
      ]}
      android_ripple={{ color: Colors.lightblue }}
      onPress={() => navigation.navigate("ManageExpense", { id: data.id })}
    >
      <View>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
      <View style={styles.amount_box}>
        <Text style={styles.amount_text}>{amount}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  pressable_box: {
    backgroundColor: Colors.darkerblue,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 8,
    elevation: 5,
    marginVertical: 5,
  },
  left_box: {},
  description: {
    fontWeight: "bold",
    color: Colors.white,
  },
  date: {
    fontWeight: "thin",
    color: Colors.white,
  },
  amount_box: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    // paddingHorizontal: 16,
    // paddingVertical: 10,
    minWidth: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  amount_text: {
    fontWeight: "bold",
    color: Colors.blue,
  },
});

export default ExpenseItem;
