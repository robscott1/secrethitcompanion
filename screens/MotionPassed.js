import styles from "./MotionPassedStyles";
import React, { Component } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Keyboard,
} from "react-native";
import { connect } from "react-redux";
import { electDuke, incrementFail } from "../actions/voteActions.js";
import PlayerList from "../components/PlayersList";
import { makeKing } from "../actions";

class MotionPassed extends Component {
  constructor(props) {
    super(props);

    this.handleNein = this.handleNein.bind(this);
    this.handleJa = this.handleJa.bind(this);
  }

  handleNein() {
    this.props.voteFailure();
    this.props.newKing();
    this.props.navigation.navigate("game");
  }

  handleJa() {
    console.log("handled..");
    this.props.navigation.navigate("chooseDuke");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.motionText}>Was the motion passed?</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={this.handleJa} style={styles.button}>
            <Text style={styles.text}>Yes!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleNein} style={styles.button}>
            <Text style={styles.text}>No!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.playerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  electDuke: () => {
    dispatch(electDuke);
  },
  voteFailure: () => {
    dispatch(incrementFail);
  },
  newKing: () => {
    dispatch(makeKing(null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MotionPassed);
