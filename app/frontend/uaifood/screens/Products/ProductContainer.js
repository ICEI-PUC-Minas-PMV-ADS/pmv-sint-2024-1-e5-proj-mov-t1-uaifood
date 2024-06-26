import { useState, useEffect } from "react";
import {View, Text, StyleSheet, Dimensions, ScrollView} from "react-native";

import { Container, Header, Item, Input } from "native-base";

import ProductList from "./ProductList";
import SearchedProducts from "./SearchedProducts";
import Banner from "../../shared/Banner";
import CategoryFilter from "./CategoryFilter";
import Ionicons from "@expo/vector-icons/Ionicons";

const data = require("../../assets/data/products.json");
const productsCategories = require('../../assets/data/categories.json');

let { height } = Dimensions.get("window");

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);


  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(productsCategories);
    setProductsCtg(data);
    setActive(-1);
    setInitialState(data);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive()
      setInitialState();
    };
  }, []);

  // Product Methods
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

  // Categories
  const changeCtg = (ctg) => {
    {
      ctg === "todas"
          ? [setProductsCtg(initialState), setActive(true)]
          : [
            setProductsCtg(
                products.filter((i) => i.category._id === ctg),
                setActive(true)
            ),
          ];
    }
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
          {focus === true ? (
            <Ionicons onPress={onBlur} name="close" size={15} />
          ) : null}
        </Item>
      </Header>
      {focus === true ? (
        <SearchedProducts
            navigation={props.navigation}
            productsFiltered={productsFiltered}
        />
      ) : (
        <ScrollView>
          <View>
            <View>
              <Banner />
            </View>
            <View>
              <CategoryFilter
                categories={categories}
                categoryFilter={changeCtg}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </View>
            {productsCtg.length > 0 ? (
                <View style={styles.listContainer}>
                  {productsCtg.map((item) => {
                    return(
                        <ProductList
                          navigation={props.navigation}
                          key={item.name}
                          item={item}
                        />
                    )
                  })}
                </View>
              ) : (
                <View style={[styles.center, { height: height / 2}]}>
                  <Text>Nenhum produto encontrado</Text>
                </View>
            )}
          </View>
        </ScrollView>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro"
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro"
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProductContainer;
