import { View, StyleSheet, Dimensions } from "react-native";
import { Content, Left, Body, ListItem, Thumbnail, Text } from "native-base";

let { width } = Dimensions.get("window");

const SearchedProducts = ({ productsFiltered }) => {
  return (
    <Content style={{ width: width }}>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <ListItem key={item.id}>
            <Left>
              <Thumbnail source={{ uri: item.image ? item.image : "empty" }} />
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View>
          <Text style={{ alignSelf: "center" }}>
            Nenhum produto encontrado com esse nome
          </Text>
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "cente",
  },
});

export default SearchedProducts;
