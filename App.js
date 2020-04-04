import 'react-native-gesture-handler';
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import GameScreen from "./screens/Game";
import StartScreen from "./screens/Start";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="start?">
            <Stack.Screen name="Start a New Game" component={StartScreen}></Stack.Screen>
            <Stack.Screen name="Secret Hitler" component={GameScreen}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

