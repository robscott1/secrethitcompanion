import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import ImageOrTimer from "../components/ImageOrTimer";
import PlayerList from "../components/PlayersList";
import { connect } from "react-redux";
import { addPlayer, makePresident } from "../actions";
import AddPlayerPBar from "../components/AddPlayerPBar";

class StartScreen extends Component {
  constructor(props) {
    super(props);

    this.beginGame = this.beginGame.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  state = {
    entry: "",
    appText: "",
  };

  changeTextHandler(text) {
    this.setState({
      entry: text,
      appText: this.state.appText,
    });
  }

  beginGame() {
    if (this.props.players.length < 6) {
      alert("Add at least 6 players to start!");
    } else {
      this.props.changePresident("start");
      this.props.navigation.navigate("game");
    }
  }

  addPlayer() {
    if (this.state.entry === "") {
      return;
    } else if (this.props.players.length == 10) {
      alert("Cannot add more than 10 players!");
    }

    var player = {
      id: this.state.entry,
      Duke: false,
      president: false,
      alive: true,
      key: Date.now(),
    };

    this.props.newPlayer(player);

    this.setState({
      entry: "",
      appText: "",
    });

    Keyboard.dismiss();
  }

  render() {
    let beginBtnStyle =
      this.props.players.length >= 5
        ? styles.beginBtnEnabled
        : styles.beginBtnDisabled;

    return (
      <View style={styles.container}>
        <ImageOrTimer />
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder="enter player name..."
            value={this.state.entry}
            onChangeText={this.changeTextHandler}
          />
          <View style={{ width: 10 }} />
          <TouchableOpacity style={styles.button} onPress={this.addPlayer}>
            <Text style={styles.addBtnText}>ADD!</Text>
          </TouchableOpacity>
        </View>
        <AddPlayerPBar
          percentage={this.props.players.length * 10}
          style={styles.bar}
        />
        <PlayerList players={this.props.players} purpose="start" />
        <View
          style={{
            display: this.props.players.length > 5 ? "flex" : "none",
            paddingTop: 20,
          }}
        >
          <TouchableOpacity
            style={
              this.props.players.length > 5
                ? styles.beginBtnEnabled
                : styles.beginBtnDisabled
            }
            onPress={this.beginGame}
          >
            <Text
              style={{
                color: this.props.players.length > 5 ? "white" : "black",
              }}
            >
              Begin Game!
            </Text>
          </TouchableOpacity>
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
    height: 40,
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  input: {
    height: "100%",
    width: "75%",
    paddingTop: 30,
    fontSize: 18,
    backgroundColor: "white",
    shadowOpacity: 0.5,
    borderRadius: 15,
    textAlign: "center",
    textAlignVertical: "center",
  },
  button: {
    width: "20%",
    height: "100%",
    borderRadius: 20,
    backgroundColor: "#434343",
    marginHorizontal: 5,
    shadowOpacity: 0.5,
    marginLeft: 5,
  },
  beginBtnDisabled: {
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B5AFA8",
    borderColor: "#B5AFA8",
  },
  beginBtnEnabled: {
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#434343",
    borderColor: "#434343",
    shadowOpacity: 0.6,
  },
  addBtnText: {
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 17,
  },
});

const mapStateToProps = (state) => ({
  ...state.playerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  newPlayer: (player) => {
    dispatch(addPlayer(player));
  },
  killAPlayer: (player) => {
    dispatch(killPlayer(player));
  },
  electNewDuke: (player) => {
    dispatch(electDuke(player));
  },
  changePresident: (start) => {
    dispatch(makePresident(start));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
