import React, { Component } from "react";
import icon from "../assets/icon.png";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight,
  Text
} from "react-native";
import ImageOrTimer from "../components/ImageOrTimer";
import PlayerList from "../components/PlayersList";

class StartScreen extends Component {
  static navigationOptions = () => ({
    title: 'Add Players',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 : 54,
      backgroundColor: "#434343"
    },
    headerTitleStyle: {
      margin: Platform.OS === 'android' ? 0 : 0,
      color: 'white'
    },
    headerLeft: <Image source={icon} style={styles.imageStyle}/>
  });

  state = {
    entry: "",
    players: []
  };

  render() {
    console.log("DBG Console - players: " + this.state.players);

    return (
      <View style={styles.container}>
        <ImageOrTimer />
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder="Enter Players"
            onChangeText={val =>
              this.setState({
                entry: val,
                players: this.state.players
              })
            }
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() =>
              this.state.players.push({
                name: this.state.entry,
                chancellor: false,
                president: false,
                alive: true
              })
            }
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Add
            </Text>
          </TouchableHighlight>
        </View>
        <PlayerList players={this.state.players} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40
  },
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#FBB969",
    height: "100%"
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 30
  },
  input: {
    height: "100%",
    width: "75%",
    borderWidth: 2,
    paddingTop: 30,
    fontSize: 18,
    alignItems: "center",
    backgroundColor: "white",
    shadowOpacity: 0.5,
    alignContent: "center",
    justifyContent: "center"
  },
  button: {
    width: "25%",
    height: "100%",
    borderRadius: 20,
    borderWidth: 3,
    backgroundColor: "black",
    marginHorizontal: 5,
    alignItems: "center",
    shadowOpacity: 0.5
  }
});

export default StartScreen;
