import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Navigators
import Main from './Navigators/Main';

// Screens
import Header from "./shared/Header";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
      <NavigationContainer>
          <Header />
          <Main />
      </NavigationContainer>
  );
}
