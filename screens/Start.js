import React, { Component } from "react";
import icon from "../assets/icon.png";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Text,
  TouchableOpacity
} from "react-native";
import ImageOrTimer from "../components/ImageOrTimer";
import PlayerList from "../components/PlayersList";
import PlayerInputPBar from "../components/PlayerInputPBar";

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
          <TouchableOpacity
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
            <Text style={styles.text}>Add</Text>
          </TouchableOpacity>
        </View>
        <PlayerInputPBar percentage={(this.state.players.length / 10) * 100} />
        <PlayerList players={this.state.players} />
        <TouchableOpacity
          style={
            this.state.players.length >= 6
              ? styles.startBtnActive
              : styles.startBtnInactive
          }
        >
          <Text
            style={{
              color: this.state.players.length >= 6 ? "white" : "grey",
              alignSelf: "center",
              fontSize: 32
            }}
          >
            Start Game!
          </Text>
        </TouchableOpacity>
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
    marginVertical: 30
  },
  input: {
    height: "100%",
    width: "75%",
    borderWidth: 2,
    borderRadius: 20,
    paddingTop: 30,
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
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
  },
  text: {
    fontSize: 18,
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  startBtnActive: {
    alignSelf: "center",
    width: "100%",
    height: 45,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "black",
    shadowOpacity: 0.5
  },
  startBtnInactive: {
    alignSelf: "center",
    width: "100%",
    height: 45,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 15,
    backgroundColor: "grey"
  }
});

export default StartScreen;
