import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Screens
import Checkout from "../screens/Cart/Checkout/Checkout";
import Payment from "../screens/Cart/Checkout/Payment";
import Confirm from "../screens/Cart/Checkout/Confirm";

const Tab = createMaterialTopTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Entrega" component={Checkout} />
      <Tab.Screen name="Pagamento" component={Payment} />
      <Tab.Screen name="Confirmar" component={Confirm} />
    </Tab.Navigator>
  );
}

export default function CheckoutNavigator() {
  return <MyTabs />;
}
