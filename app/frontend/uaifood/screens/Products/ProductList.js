import { TouchableOpacity, View, Dimensions } from "react-native";
import ProductCard from "./ProductCard";

let { width } = Dimensions.get("window");

const ProductList = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
        style={{ width: "50%" }}
        onPress={() =>
          props.navigation.navigate("Detalhe do Produto", { item: item })
    }
    >
      <View style={{ width: width / 2, backgroundColor: "gainsboro" }}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
