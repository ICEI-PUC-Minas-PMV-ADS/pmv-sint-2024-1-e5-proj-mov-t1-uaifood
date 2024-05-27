import React, {useState} from 'react'
import {Image, View, StyleSheet, Text, ScrollView, Button} from 'react-native';
import {Left, Right, Container, H1} from 'native-base';

import { connect } from 'react-redux';
// import * as actions from '../../redux/actions/cartActions';

const SingleProduct = (props) => {

  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState(null);

  return (
      <Container style={styles.container}>
        <ScrollView style={{marginBottom: 80, padding: 5}}>
          <View>
            <Image
                source={{
                  uri: item.image ? item.image
                      : 'empty'
                }}
                resizeMode="contain"
                style={styles.image}
            />
          </View>
          <View style={styles.contentContainer}>
            <H1 style={styles.contentHeader}>{item.name}</H1>
            <Text style={styles.contentText}>{item.brand}</Text>
          </View>
        </ScrollView>

        <View style={styles.bottomContainer}>
          <Left>
            <Text style={styles.price}>R$ {item.price}</Text>
          </Left>
          <Right>
            <Button title="Adicionar" />
          </Right>
        </View>
      </Container>
  );
}

const mapToDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
        dispatch(actions.addToCart({quantity: 1, product}))
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%'
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 0,
    margin: 0
  },
  image: {
    width: '100%',
    height: 250
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentHeader: {
    fontWeight: 'bold',
    marginBottom: 20
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white'
  },
  price: {
    fontSize: 24,
    margin: 20,
    color: 'red'
  },
});

export default connect(null, mapToDispatchToProps)(SingleProduct);