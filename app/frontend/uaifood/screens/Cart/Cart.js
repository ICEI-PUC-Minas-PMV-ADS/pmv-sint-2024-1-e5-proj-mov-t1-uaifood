import {Text, View, Dimensions, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {
  Container,
  Left,
  Right,
  H1,
  ListItem,
  Thumbnail,
  Body
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from "react-redux";

let {height, width} = Dimensions.get("window");

const Cart = (props) => {
  let total = 0;
  props.cartItems.forEach(cart => {
    return(total += cart.product.price)
  });

  return (
      <>
        {props.cartItems.length ? (
            <Container>
              {props.cartItems.map(data => {
                return (
                    <ListItem
                        style={styles.listItem}
                        key={Math.random()}
                        avatar
                    >
                      <Left>
                        <Thumbnail
                            source={{
                              uri: data.product.image ?
                                  data.product.image : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"
                            }}
                        />
                      </Left>
                      <Body style={styles.body}>
                        <Left>
                          <Text>{data.product.name}</Text>
                        </Left>
                        <Right>
                          <Text>R$ {data.product.price}</Text>
                        </Right>
                      </Body>
                    </ListItem>
                );
              })}
              <View style={styles.bottomContainer}>
                <Left>
                  <Text style={styles.price}>R$ {total}</Text>
                </Left>
                <Right>
                  <Button title="Limpar" />
                </Right>
                <Right>
                  <Button title="Checkout"
                          onPress={() => props.navigation.navigate("Checkout")}
                  />
                </Right>
              </View>
            </Container>
        ) : (
            <Container style={styles.emptyContainer}>
              <Text>O carrinho está vazio</Text>
              <Text>Adicione produtos ao carrinho</Text>
            </Container>
        )}
      </>
  );
};

const mapStateToProps = (state) => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item))
  };
};

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    elevation: 20
  },
  listItem: {
    alignItems: "center",
    backgroundColor: 'white',
    justifyContent: "center",
  },
  price: {
    fontSize: 18,
    margin: 20,
    color: "red",
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: 'row',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
