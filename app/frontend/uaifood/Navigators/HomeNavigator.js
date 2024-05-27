import { createStackNavigator } from "@react-navigation/stack"

import ProductContainer from "../screens/Products/ProductContainer";
import SingleProduct from "../screens/Products/SingleProduct";

const Stack = createStackNavigator()

function MyStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
            name='Home'
            component={ProductContainer}
            options={{
              headerShown: false,
            }}
        />
        <Stack.Screen
            name='Detalhe do Produto'
            component={SingleProduct}
            options={{
              headerShown: true,
            }}
        />
      </Stack.Navigator>
  )
}

export default function HomeNavigator() {
  return <MyStack />;
}