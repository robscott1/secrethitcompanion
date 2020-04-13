import React, { Component } from "react";
import PlayerList from "../components/PlayersList";
import { connect } from "react-redux";
import { electChancellor } from "../actions/voteActions.js";
import styles from "./ChooseChancellorStyles";
import { View, Text } from "react-native";

class ChooseChancellor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>Choose your new Chancellor wisely...</Text>
        </View>
        <PlayerList players={this.props.players} purpose={"elect"}></PlayerList>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.playerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  electChancellor: () => {
    dispatch(electChancellor);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseChancellor);
