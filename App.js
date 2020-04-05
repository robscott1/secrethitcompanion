import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import GameScreen from "./screens/Game";
import StartScreen from "./screens/Start";
import PlayerActionScreen from "./screens/PlayerAction";
import Vote from "./screens/Vote";
import motionPassed from "./screens/motionPassed";
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
          <Stack.Navigator initialRouteName="start">
            <Stack.Screen
              name="Kill A Bitch"
              component={PlayerActionScreen}
              options={{ title: "Kill" }}
            ></Stack.Screen>
            <Stack.Screen
              name="game"
              component={GameScreen}
              options={{ title: "Add Players" }}
            ></Stack.Screen>
            <Stack.Screen name="vote" component={Vote}></Stack.Screen>
            <Stack.Screen
              name="motionPassed"
              component={motionPassed}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
