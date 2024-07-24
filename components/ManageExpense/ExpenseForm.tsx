import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import Colors from "../../constants/Colors";
import { useState } from "react";
import Button from "../UI/Button";
import { useNavigation } from "@react-navigation/native";

interface ExpenseProp {
  amount: string;
  description: string;
  date: string;
}

function ExpenseForm({ submitBtnLabel }: { submitBtnLabel: string }) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    description: "",
    date: "",
  });

  const navigation = useNavigation();

  function handleInputChange(inputIdentifier: string, enteredValue?: string) {
    setInputValues((prev: ExpenseProp) => {
      return { ...prev, [inputIdentifier]: enteredValue };
    });
  }
  function handleSubmit() {
    console.log(inputValues);
  }
  return (
    <View style={styles.formContainer}>
      <View style={{ flexDirection: "row", columnGap: 4 }}>
        <Input
          style={{ flex: 1 }}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: inputValues.amount,
            onChangeText: (text: string) => handleInputChange("amount", text),
            // onChangeText: handleInputChange.bind(this, "amount"),
          }}
        />
        <Input
          style={{ flex: 1 }}
          label="Date"
          textInputConfig={{
            placeholder: "YYY-MM-DD",
            maxLength: 10,
            value: inputValues.date,
            onChangeText: (text: string) => handleInputChange("date", text),
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentence",
          value: inputValues.description,
          onChangeText: (text: string) =>
            handleInputChange("description", text),
        }}
      />

      <View style={styles.btnsContainer}>
        <Button
          text="Cancel"
          mode="outline"
          pressAction={() => navigation.goBack()}
        />
        <Button text={submitBtnLabel} pressAction={handleSubmit} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 24,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
    marginVertical: 10,
    borderBottomWidth: 5,
    borderBottomColor: Colors.white,
    paddingBottom: 18,
    marginHorizontal: 24,
  },
});

export default ExpenseForm;
