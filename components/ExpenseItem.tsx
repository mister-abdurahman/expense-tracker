import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { EachExpense } from "../store/context";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ data }: { data: EachExpense }) {
  const { title, price, date } = data;
  const navigation:any = useNavigation()
  return (
    <Pressable
      style={({ pressed }) => [
        styles.pressable_box,
        pressed ? { opacity: 0.65 } : null,
      ]}
      android_ripple={{ color: Colors.lightblue }}
      onPress={()=> navigation.navigate('EditExpense', {id: data.id})}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.price_box}>
        <Text style={styles.price_text}>{price}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  pressable_box: {
    backgroundColor: Colors.blue,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 8,
    elevation: 5,
    marginVertical: 5,
  },
  left_box: {},
  title: {
    fontWeight: "bold",
    color: Colors.white,
  },
  date: {
    fontWeight: "thin",
    color: Colors.white,
  },
  price_box: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  price_text: {
    fontWeight: "bold",
    color: Colors.blue,
  },
});

export default ExpenseItem;
