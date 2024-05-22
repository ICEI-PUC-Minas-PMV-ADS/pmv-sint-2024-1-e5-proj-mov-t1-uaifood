import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import ProductList from "./ProductList";
import { Container, Header, Item, Input } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchedProducts from "./SearchedProducts";
import Banner from "../../shared/Banner";

const data = require("../../assets/data/products.json");
let { height } = Dimensions.get("window");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Ionicons name="search" size={15} />
          <Input
            placeholder="Pesquisar produto"
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus == true ? (
            <Ionicons onPress={onBlur} name="close" size={15} />
          ) : null}
          <View style={styles.container}></View>
        </Item>
      </Header>
      {focus == true ? (
        <SearchedProducts productsFiltered={productsFiltered} />
      ) : (
        <View style={styles.container}>
          <View>
            <Banner />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              numColumns={2}
              data={products}
              renderItem={({ item }) => (
                <ProductList key={item.id} item={item} />
              )}
              keyExtractor={(item) => item.brand}
            />
          </View>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
});

export default ProductContainer;
