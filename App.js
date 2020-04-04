import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import GameScreen from "./screens/Game";
import StartScreen from "./screens/Start";
import PlayerActionScreen from "./screens/PlayerAction";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./screens/Start";
const Stack = createStackNavigator();

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="start">
            <Stack.Screen
              name="start"
              component={StartScreen}
              options={{ title: "Add Players" }}
            ></Stack.Screen>
            <Stack.Screen
              name="game"
              component={GameScreen}
              options={{ title: "Add Players" }}
            ></Stack.Screen>
            <Stack.Screen
              name="playerAction"
              component={PlayerActionScreen}
              options={{ title: "Kill A Bitch" }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
