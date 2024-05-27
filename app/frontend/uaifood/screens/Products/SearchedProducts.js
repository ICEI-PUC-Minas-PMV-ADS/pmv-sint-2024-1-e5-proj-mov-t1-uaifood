import { View, StyleSheet, Dimensions } from "react-native";
import { Content, Left, Body, ListItem, Thumbnail, Text } from "native-base";

let { width } = Dimensions.get("window");

const SearchedProducts = (props) => {
  const { productsFiltered } = props;
  return (
    <Content style={{ width: width }}>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <ListItem
              onPress={() => {
                props.navigation.navigate("Detalhe do Produto", {item: item})
              }}
              key={item._id}
              avatar
          >
            <Left>
              <Thumbnail
                  source={{ uri: item.image ?
                        item.image : ""
                  }}
              />
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
    alignItems: "center",
    height: 100
  },
});

export default SearchedProducts;
