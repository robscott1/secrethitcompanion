import React, { Component } from "react";
import PlayerList from "../components/PlayersList";
import { connect } from "react-redux";
import { electDuke } from "../actions/voteActions.js";
import styles from "./ChooseDukeStyles";
import { View, Text } from "react-native";

class ChooseDuke extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>Choose your new Duke wisely...</Text>
        </View>
        <PlayerList
          players={this.props.players}
          nav={this.props.navigation}
          purpose={"elect"}
        ></PlayerList>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseDuke);
