import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { connect } from "react-redux";

import { startTimer, stopTimer, decrementTimer } from "../actions/timerActions";

class ImageOrTimer extends Component {
  constructor(props) {
    super(props);

    this.handleTime = this.handleTime.bind(this);
  }

  state = {
    hasTimerStarted: false,
    time: 300,
  };
  //this state or props will decide when this
  // changes into timer or image

  handleTime() {
    if (this.state.time <= 0) {
      this.props.hideTimer();
      this.setState({
        hasTimerStarted: false,
        time: 300,
      });
      clearInterval(this.interval);
    } else {
      this.setState({
        hasTimerStarted: true,
        time: this.state.time - 1,
      });
    }
  }

  componentDidMount() {
    if (!this.state.hasTimerStarted) {
      this.interval = setInterval(this.handleTime, 1000);
    }
  }

  componentDidUpdate() {
    if (this.state.time <= 0) {
      this.props.hideTimer();
      clearInterval(this.interval);
    } else if (!this.props.timerOn && this.state.hasTimerStarted) {
      this.setState({
        hasTimerStarted: false,
        time: 300,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.props.hideTimer();
  }

  render() {
    if (this.props.timerOn) {
      let minText = Math.floor(this.state.time / 60);
      let secText = this.state.time % 60;
      if (secText < 10) {
        secText = "0" + secText;
      }

      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            {minText}:{secText}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require("../assets/game-title.png")}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 50,
  },
  text: {
    fontSize: 100,
    color: "#434343",
  },
});

const mapStateToProps = (state) => ({
  ...state.imageOrTimerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  hideTimer: () => {
    dispatch(stopTimer);
  },
  showTimer: () => {
    dispatch(startTimer);
  },
  continueTimer: () => {
    dispatch(decrementTimer);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageOrTimer);
