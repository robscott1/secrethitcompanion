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
import {
  createStackNavigator,
  HeaderBackground,
} from "@react-navigation/stack";
import KillPlayer from "./screens/KillPlayer";
import { screensEnabled } from "react-native-screens";
import Game from "./screens/Game";
const Stack = createStackNavigator();

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="start" screenOptions={{headerShown : false}}>
            <Stack.Screen name="start" component={StartScreen}></Stack.Screen>
            <Stack.Screen
              name="chooseChancellor"
              component={ChooseChancellor}
              screenOptions={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="playerAction"
              component={PlayerActionScreen}
              options={{
                title: "Add Players",
                headerStyle: { backgroundColor: "#FBB969" },
              }}
            ></Stack.Screen>
            <Stack.Screen name="game" component={GameScreen}></Stack.Screen>
            <Stack.Screen
              name="killPlayer"
              component={KillPlayer}
            ></Stack.Screen>
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
