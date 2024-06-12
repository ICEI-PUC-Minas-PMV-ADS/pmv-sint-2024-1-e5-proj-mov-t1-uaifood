import React, { useEffect, useState, useContext } from "react";
import { Text, View, Button } from "react-native";
import FormContainer from "../../../shared/Form/FormContainer";
import Input from "../../../shared/Form/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { connect } from "react-redux";

const Checkout = (props) => {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems);

    return () => {
      setOrderItems();
    };
  }, []);

  const checkOut = () => {
    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      status: "3",
      user,
      zip,
    };

    props.navigation.navigate("Payment", { order: order });
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Entrega"}>
        <Input
          placeholder={"Telefone"}
          name={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={"Endereço de entrega"}
          name={"ShippingAddress1"}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />

        <Input
          placeholder={"Cidade"}
          name={"city"}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Input
          placeholder={"CEP"}
          name={"zip"}
          value={zip}
          keyboardType={"numeric"}
          onChangeText={(text) => setZip(text)}
        />

        <View style={{ width: "80%", alignItems: "center" }}>
          <Button title="Confirmar" onPress={() => checkOut()} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps)(Checkout);
