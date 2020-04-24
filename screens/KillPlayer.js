import React, { Component } from "react";
import PlayerList from "../components/PlayersList";
import { connect } from "react-redux";
import styles from "./KillPlayerStyles";
import { View, Text } from "react-native";
import { killPlayer } from "../actions";

class KillPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>Root out the enemy...</Text>
        </View>
        <PlayerList players={this.props.players} purpose={"kill"}></PlayerList>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.playerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  kill: (player) => {
    dispatch(killPlayer(player));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(KillPlayer);
