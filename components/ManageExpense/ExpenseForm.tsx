import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import Colors from "../../constants/Colors";
import { useContext, useState } from "react";
import Button from "../UI/Button";
import { useNavigation } from "@react-navigation/native";
import { EachExpense, ExpenseContext } from "../../store/context";
import { formatDate } from "../../utils/formatDate";
import { createExpense, updateExpense, deleteExpense } from "../../utils/http";

interface ExpenseProp {
  amount: { value: string; isValid: boolean };
  description: { value: string; isValid: boolean };
  date: { value: string; isValid: boolean };
}

function ExpenseForm({
  isEditing,
  defaultValue,
}: {
  isEditing: boolean;
  defaultValue?: EachExpense;
}) {
  const { updateExpense: updateExpenseLocal, addExpense } =
    useContext(ExpenseContext);
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? `${defaultValue?.amount}` : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? `${defaultValue?.description}` : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? `${formatDate(defaultValue?.date)}` : "",
      isValid: true,
    },
  });

  const navigation = useNavigation();

  async function handleUpdateExpense(data: EachExpense) {
    updateExpenseLocal(data);
    await updateExpense(data.id, data);
  }
  async function handleCreateExpense(data: EachExpense) {
    const id = await createExpense(data); //remote
    addExpense({ ...data, id }); //local
  }

  function handleInputChange(inputIdentifier: string, enteredValue?: string) {
    setInputs((prev: ExpenseProp) => {
      return {
        ...prev,
        [inputIdentifier]: {
          value: enteredValue,
          isValid: true,
        },
      };
    });
  }

  function handleSubmit() {
    const data = {
      amount: Number(inputs.amount.value),
      description: inputs.description.value,
      date: new Date(inputs.date.value),
    };

    const amountIsValid = data.amount > 0 && typeof data.amount === "number";
    const dateIsValid = data.date.toString() !== "Invalid Date";
    const descriptionIsValid = data.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      return setInputs((prev: ExpenseProp) => {
        return {
          amount: { value: prev.amount.value, isValid: amountIsValid },
          date: { value: prev.date.value, isValid: dateIsValid },
          description: {
            value: prev.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
    }
    //   return Alert.alert("Invalid Input", "Please check your input values");

    isEditing ? handleUpdateExpense(data) : handleCreateExpense(data);
    navigation.goBack();
  }

  const isFormInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.formContainer}>
      <View style={{ flexDirection: "row", columnGap: 4 }}>
        <Input
          style={{ flex: 1 }}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: inputs.amount.value,
            onChangeText: (text: string) => handleInputChange("amount", text),
            // onChangeText: handleInputChange.bind(this, "amount"),
          }}
        />
        <Input
          style={{ flex: 1 }}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputs.date.value,
            onChangeText: (text: string) => handleInputChange("date", text),
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentence",
          value: inputs.description.value,
          onChangeText: (text: string) =>
            handleInputChange("description", text),
        }}
      />

      {isFormInvalid && (
        <Text style={styles.errorText}>
          Invalid Value - Please check your input values
        </Text>
      )}

      <View style={styles.btnsContainer}>
        <Button
          text="Cancel"
          mode="outline"
          pressAction={() => navigation.goBack()}
        />
        <Button
          text={isEditing ? "Update" : "Create"}
          pressAction={handleSubmit}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 20,
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
  errorText: {
    textAlign: "center",
    color: "red",
  },
});

export default ExpenseForm;
