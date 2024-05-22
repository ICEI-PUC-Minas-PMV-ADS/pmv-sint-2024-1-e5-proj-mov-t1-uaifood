import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Button,
  Text,
} from "react-native";

let { width } = Dimensions.get("window");

const ProductCard = ({ name, price, image, countInStock }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: image ? image : "empty" }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
      </Text>
      <Text style={styles.price}>R$ {price}</Text>

      {countInStock > 0 ? (
        <View style={{ marginBottom: 60 }}>
          <Button title={"Adicionar"} style={{ color: "green " }} />
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Indisponível no momento</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.5,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: 5,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 40,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "orange",
  },
});

export default ProductCard;
