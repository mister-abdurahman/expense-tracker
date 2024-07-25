import { View, Text, StyleSheet, TextInput } from "react-native";
import Colors from "../../constants/Colors";

function Input({
  label,
  textInputConfig,
  style,
  invalid,
}: {
  label: string;
  textInputConfig?: any;
  style?: any;
  invalid?: boolean;
}) {
  // if(textInputConfig  && textInputConfig.multiline){

  // }
  return (
    <View style={[styles.box, style]}>
      <Text style={[styles.label, invalid && styles.errorLabel]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textInputConfig?.multiline && styles.inputMultiline,
          invalid && styles.errorInput,
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
  errorLabel: {
    color: "red",
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 7,
    paddingVertical: 3,
    paddingHorizontal: 6,
    color: Colors.darkerblue,
  },
  errorInput: {
    backgroundColor: "red",
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});

export default Input;
