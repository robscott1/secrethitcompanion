import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text
} from "react-native";
import ImageOrTimer from "../components/ImageOrTimer";
import PlayerList from "../components/PlayersList";
import playerReducer from "../reducers/player";

class StartScreen extends Component {
  constructor(props) {
    super(props);

    this.beginGame = this.beginGame.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  state = {
    entry: "",
    players: [],
    appText: ""
  };

  changeTextHandler(text) {
    this.setState({
      entry: text,
      players: this.state.players,
      appText: this.state.appText
    });
  }

  beginGame() {
    this.props.navigation.navigate('game', { players: this.state.players });
    if (this.state.players.length < 6) {
      console.log('minimum of 6 players');
    } else {
      this.props.navigation.navigate('game', { players: this.state.players });
    }
  }

  addPlayer() {
    if (this.state.entry === "") {
      return;
    }

    var players = this.state.players;

    players.push({
      name: this.state.entry,
      chancellor: false,
      president: false,
      alive: true
    });

    this.setState({
      players: players,
      entry: '',
      appText: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageOrTimer />
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder="Enter Players"
            value={this.state.entry}
            onChangeText={this.changeTextHandler}
          />
          <TouchableOpacity title='add'
            style={styles.button}
            onPress={this.addPlayer}>
          </TouchableOpacity>
        </View>
        <PlayerInputPBar percentage={(this.state.players.length / 10) * 100} />
        <PlayerList players={this.state.players} />
        <View>
          <Button title='Begin Game' onPress={this.beginGame}></Button>
        </View>
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
