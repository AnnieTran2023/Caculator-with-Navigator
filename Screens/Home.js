import { StyleSheet } from "react-native";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  const [result, setResult] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operations, setOperations] = useState([]);

  const addition = () => {
    const sum = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
    const currentOperation = `${firstNumber} + ${secondNumber} = ${sum}`;
    setOperations([...operations, currentOperation]);
    setResult(sum.toString());
    setFirstNumber("");
    setSecondNumber("");
  };

  const subtraction = () => {
    const difference = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
    const currentOperation = `${firstNumber} - ${secondNumber} = ${difference}`;
    setOperations([...operations, currentOperation]);
    setResult(difference.toString());
    // Clear the input fields after performing the operation
    setFirstNumber("");
    setSecondNumber("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{ fontWeight: "700", fontSize: 20 }}>
          Result: {result}
        </Text>
        <TextInput
          placeholder="Enter first number"
          onChangeText={setFirstNumber}
          value={firstNumber}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter second number"
          onChangeText={setSecondNumber}
          value={secondNumber}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={addition} title="+" />
        <Button onPress={subtraction} title="-" />
        <Button
          onPress={() =>
            navigation.navigate("History", { operations: operations })
          }
          title="History"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    padding: 10,
    margin: 10,
    width: 200,
  },
});
