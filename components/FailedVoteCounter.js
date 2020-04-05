import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import FailedVoteBtn from "./FailedVoteBtn";
import { connect } from "react-redux";

class FailedVoteCounter extends Component {
  render() {
    const { failedVotes } = this.props;

    return (
      <View style={styles.container}>
        <FailedVoteBtn num={1} attempts={failedVotes} />
        <FailedVoteBtn num={2} attempts={failedVotes} />
        <FailedVoteBtn num={3} attempts={failedVotes} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    alignSelf: "center",
    paddingTop: 10,
  },
});

const mapStateToProps = (state) => ({
  ...state.failedVoteReducer,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(FailedVoteCounter);
