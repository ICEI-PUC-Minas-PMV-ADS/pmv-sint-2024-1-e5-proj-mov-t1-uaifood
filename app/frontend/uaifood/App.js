import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

// navigators
import Main from "./navigators/Main";

// Screens
import Header from "./shared/Header";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
      </NavigationContainer>
    </Provider>
  );
}
