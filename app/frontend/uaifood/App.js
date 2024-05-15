import { StyleSheet, View } from "react-native";
import ProductContainer from "./screens/Products/ProductContainer";
import Header from "./shared/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer />
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
