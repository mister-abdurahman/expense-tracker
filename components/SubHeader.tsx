import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function SubHeader({
  filterText,
  price,
}: {
  filterText: string;
  price: number;
}) {
  return (
    <View style={styles.subHeader}>
      <Text style={styles.subHeader_leftText}>{filterText}</Text>
      <Text style={styles.subHeader_rightText}>${price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: Colors.slate,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    elevation: 6,
    marginVertical: 12,
  },
  subHeader_leftText: {
    color: Colors.blue,
    fontWeight: "light",
  },
  subHeader_rightText: {
    color: Colors.blue,
    fontWeight: "bold",
  },
});

export default SubHeader;
