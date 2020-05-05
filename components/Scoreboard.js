import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LiberalGuide from "./LiberalGuide";
import FascistGuide from "./FascistGuide";
import PBar from "./PBar";
import { TouchableOpacity, Alert } from "react-native";
import { makeKing } from "../actions";
import { connect } from "react-redux";

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.incrementLScore = this.incrementLScore.bind(this);
    this.incrementFScore = this.incrementFScore.bind(this);
    this.alertWinner = this.alertWinner.bind(this);
  }

  state = {
    libScore: 0,
    fasScore: 0,
  };

  alertWinner() {
    if (this.state.fasScore == 5) {
      var string = "Fascist have taken over!";
    } else {
      var string = "Liberals stand strong!";
    }

    Alert.alert("Victory!", string, [
      { text: "New Game", onPress: this.props.newGame },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Ok", onPress: () => console.log("Ok Pressed") },
    ]);
  }

  incrementFScore() {
    if (this.state.fasScore <= 5) {
      let lib = this.state.libScore;
      let fas = this.state.fasScore;

      let newFas = fas + 1;

      this.setState({
        libScore: lib,
        fasScore: newFas,
      });

      if (this.state.fasScore >= 3) {
        {
          this.props.kill();
        }
      }

      this.props.newKing();
      this.props.reRender();
      if (this.state.fasScore === 5) {
        this.alertWinner();
      }
    }
  }

  incrementLScore() {
    if (this.state.libScore < 5) {
      let lib = this.state.libScore;
      let fas = this.state.fasScore;

      let newLib = lib + 1;

      this.setState({
        libScore: newLib,
        fasScore: fas,
      });

      this.props.newKing();
      this.props.reRender();
      if (this.state.libScore === 4) {
        this.alertWinner();
      }
    }
  }

  render() {
    return (
      <View style={styles.row}>
        <View style={styles.container}>
          <PBar
            percentage={(this.state.libScore / 5) * 100}
            color={"#346388"}
          />
          <LiberalGuide />
          <View style={{ height: 15 }} />
          <PBar
            percentage={(this.state.fasScore / 6) * 100}
            color={"#D36F47"}
          />
          <FascistGuide />
        </View>
        <View style={styles.btnCol}>
          <TouchableOpacity
            style={styles.lPlusBtn}
            onPress={this.incrementLScore}
          >
            <Text style={styles.text}> + </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fPlusBtn}
            onPress={this.incrementFScore}
          >
            <Text style={styles.text}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "90%",
  },
  row: {
    flexDirection: "row",
  },
  btnCol: {
    width: 65,
    alignItems: "center",
    height: "100%",
    paddingRight: 30,
  },
  fPlusBtn: {
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 20, //custom fit, wont reuse
    backgroundColor: "#8F320D",
    shadowOpacity: 0.5,
  },
  lPlusBtn: {
    marginTop: 15,
    borderRadius: 5,
    marginBottom: 15, //custom fit, wont reuse
    backgroundColor: "#0E3A5C",
    shadowOpacity: 0.5,
  },
  text: {
    color: '#EEE'
  }
});

const mapStateToProps = (state) => ({
  ...state.playerReducer,
  ...state.failedVoteReducer,
});

const mapDispatchToProps = (dispatch) => ({
  newKing: () => dispatch(makeKing(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
