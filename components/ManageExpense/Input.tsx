import { View, Text, StyleSheet, TextInput } from "react-native";
import Colors from "../../constants/Colors";

function Input({
  label,
  textInputConfig,
  style,
}: {
  label: string;
  textInputConfig?: any;
  style?: any;
}) {
  // if(textInputConfig  && textInputConfig.multiline){

  // }
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textInputConfig?.multiline && styles.inputMultiline,
        ]}
        {...textInputConfig}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    rowGap: 3,
    padding: 6,
  },
  label: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: "800",
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 7,
    paddingVertical: 3,
    paddingHorizontal: 6,
    color: Colors.darkerblue,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});

export default Input;
