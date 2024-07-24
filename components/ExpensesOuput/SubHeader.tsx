import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function SubHeader({
  filterText,
  amount,
}: {
  filterText: string;
  amount: number;
}) {
  return (
    <View style={styles.subHeader}>
      <Text style={styles.subHeader_leftText}>{filterText}</Text>
      <Text style={styles.subHeader_rightText}>${amount}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: Colors.lightblue,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    elevation: 6,
    marginVertical: 12,
  },
  subHeader_leftText: {
    color: Colors.darkerblue,
    fontWeight: "light",
  },
  subHeader_rightText: {
    color: Colors.darkerblue,
    fontWeight: "bold",
  },
});

export default SubHeader;
