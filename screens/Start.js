import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Keyboard
} from "react-native";
import ImageOrTimer from "../components/ImageOrTimer";
import PlayerList from "../components/PlayersList";
import { connect } from 'react-redux';
import { addPlayer } from '../actions';

//const players = useSelector(state => state.players);

class StartScreen extends Component {
  constructor(props) {
    super(props);

    this.beginGame = this.beginGame.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  state = {
    entry: "",
    appText: ""
  };

  changeTextHandler(text) {
    this.setState({
      entry: text,
      appText: this.state.appText
    });
  }

  beginGame() {
    if (this.props.players.length < 6) {
      console.log('minimum of 6 players');
    } else {
      this.props.navigation.navigate('game');
    }
  }

  addPlayer() {
    if (this.state.entry === "") {
      return;
    } else if (this.props.players.length == 10) {
      console.log('maximum of 10 players');
    }

    var player = {
      name: this.state.entry,
      chancellor: false,
      president: false,
      alive: true,
      key: Date.now()
    };

    this.props.newPlayer(player);

    this.setState({
      entry: '',
      appText: ''
    });

    Keyboard.dismiss();
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
        <PlayerList players={this.props.players} />
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

const mapStateToProps = state => ({
    ...state.playerReducer
});

const mapDispatchToProps = dispatch => ({
  newPlayer: (player) => { dispatch(addPlayer(player)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
