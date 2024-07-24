import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import Colors from "../../constants/Colors";
import { useState } from "react";

interface ExpenseProp {
  amount: string;
  description: string;
  date: string;
}

function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: "",
    description: "",
    date: "",
  });

  function handleInputChange(inputIdentifier: string, enteredValue?: string) {
    setInputValues((prev: ExpenseProp) => {
      return { ...prev, [inputIdentifier]: enteredValue };
    });
  }

  console.log(inputValues);

  function handleDescriptionChange() {}
  function handleAmountChange(amount: string) {}
  function handleDateChange() {}
  return (
    <View style={styles.formContainer}>
      <View style={{ flexDirection: "row", columnGap: 4 }}>
        <Input
          style={{ flex: 1 }}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: inputValues.amount,
            onchangeText: handleInputChange.bind(this, "amount"),
            // onchangeText: () => handleInputChange("amount"),
          }}
        />
        <Input
          style={{ flex: 1 }}
          label="Date"
          textInputConfig={{
            placeholder: "YYY-MM-DD",
            maxLength: 10,
            onchangeText: handleDateChange,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentence",
          onchangeText: handleDescriptionChange,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 24,
  },
});

export default ExpenseForm;
