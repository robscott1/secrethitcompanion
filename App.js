import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import GameScreen from "./screens/Game";
import ChooseChancellor from "./screens/ChooseChancellor";
import StartScreen from "./screens/Start";
import PlayerActionScreen from "./screens/PlayerAction";
import Vote from "./screens/Vote";
import MotionPassed from "./screens/MotionPassed";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./screens/Start";
import { screensEnabled } from "react-native-screens";
import Game from "./screens/Game";
const Stack = createStackNavigator();

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="start">
            <Stack.Screen name="start" component={StartScreen}></Stack.Screen>
            <Stack.Screen
              name="chooseChancellor"
              component={ChooseChancellor}
            ></Stack.Screen>
            <Stack.Screen
              name="playerAction"
              component={PlayerActionScreen}
              options={{ title: "Add Players" }}
            ></Stack.Screen>
            <Stack.Screen name="game" component={GameScreen}></Stack.Screen>
            <Stack.Screen name="vote" component={Vote}></Stack.Screen>
            <Stack.Screen
              name="MotionPassed"
              component={MotionPassed}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
