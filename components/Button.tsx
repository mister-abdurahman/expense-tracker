import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function Button({
  text,
  style,
  pressAction,
  mode,
}: {
  text: string;
  style?: any;
  pressAction: () => void;
  mode?: string;
}) {
  return (
    <Pressable
      style={[styles.fillBtn, mode === "outline" && styles.outlineBtn, style]}
      onPress={pressAction}
    >
      <Text
        style={[
          styles.fillBtnText,
          mode === "outline" && styles.outlineBtnText,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  fillBtn: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: Colors.blue,
  },
  fillBtnText: {
    color: Colors.white,
  },
  outlineBtn: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: Colors.blue,
    borderRadius: 6,
    backgroundColor: Colors.lightblue,
  },
  outlineBtnText: {
    color: Colors.blue,
  },
});

export default Button;
