import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Index() {
  const todos = useSelector((state) => state.todo.todos); // ✅ Fix selector

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 20,
      }}
    >
      <ScrollView style={{ flex: 1, width: "100%" }}>
        {todos.map((todo) => (
          <View key={todo.id} style={{ marginBottom: 10, padding: 10, backgroundColor: "#f0f0f0", borderRadius: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{todo.title}</Text>
            <Text style={{ fontSize: 14 }}>{todo.content}</Text>
          </View>
        ))}
      </ScrollView>

      <Link
        href="/create"
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: 50,
          height: 80,
          width: 80,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
          margin: 20,
        }}
      >
        +
      </Link>
    </View>
  );
}
