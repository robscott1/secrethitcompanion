import styles from "./VoteStyles";
import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import { connect } from "react-redux";

class Vote extends Component {
  constructor(props) {
    super(props);

    this.handleTime = this.handleTime.bind(this);
  }

  state = {
    time: 5,
  };

  handleTime() {
    console.log(this.props);
    if (this.state.time == -3) {
      this.props.navigation.navigate("MotionPassed");
    }

    this.setState({
      time: this.state.time - 1,
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.handleTime, 1000);
  }

  componentDidUpdate() {
    if (this.state.time < -3) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    var timerText = this.state.time;
    var viewStyle = styles.countdownView;

    if (this.state.time < 1) {
      timerText = "Vote!";
      viewStyle = styles.voteView;
    }

    return (
      <View style={viewStyle}>
        <Text style={styles.countdownText}>{timerText}</Text>
      </View>
    );
  }
}

export default Vote;
