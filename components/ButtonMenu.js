import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { makePresident } from "../actions";
import { startTimer, stopTimer } from "../actions/timerActions";
import { connect } from "react-redux";

class ButtonMenu extends Component {
  constructor(props) {
    super(props);

    this.handleTimer = this.handleTimer.bind(this);
  }

  handleTimer() {
    if (this.props.timerOn) {
      this.props.hideTimer();
    } else {
      this.props.showTimer();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.text} onPress={this.props.vote}>
            Vote!
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.handleTimer}>
          <Text style={styles.text}>Debate!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  button: {
    paddingHorizontal: 20,
    borderWidth: 2,
    height: 50,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center", // gotta use these stylings
    alignItems: "center", // on body holding text
    backgroundColor: "#434343",
    marginHorizontal: 10,
    shadowOpacity: 0.75,
  },
  text: {
    justifyContent: "center",
    fontSize: 14,
    paddingVertical: 10,
    color: "white",
  },
});

const mapStateToProps = (state) => ({
  ...state.playerReducer,
  ...state.imageOrTimerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  showTimer: () => {
    dispatch(startTimer);
  },
  hideTimer: () => {
    dispatch(stopTimer);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonMenu);
