import { StyleSheet, View, Text, FlatList } from "react-native";

export default function HistoryScreen({ route }) {
  const { operations } = route.params;
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700", fontSize: 20, margin: 20 }}>
        History
      </Text>
      <FlatList
        data={operations}
        keyExtractor={(item, index) => index.toString()} // Add a keyExtractor to avoid warnings
        renderItem={({ item }) => <Text style={{ margin: 10 }}>{item}</Text>}
      />
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
});
