import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { spotlight } from "../actions";
import { connect } from "react-redux";

class PlayerCard extends Component {
  constructor(props) {
    super(props);

    this.handleBtnPress = this.handleBtnPress.bind(this);
  }

  handleBtnPress() {
    this.props.putOnSpotlight(this.props.id);
    console.log("DBG Console - playercard id... " + this.props.id);
    this.props.nav.navigate("playerAction");
  }

  render() {
    var position = "";

    if (this.props.chancellor) {
      position = "Chancellor";
    } else if (this.props.president) {
      position = "President";
    }

    if (this.props.alive) {
      var dead = false;
    }

    return (
      <View style={styles.container}>
        <View style={styles.position}>
          <Text>{position}</Text>
        </View>
        <TouchableOpacity
          style={this.props.alive ? styles.alive : styles.dead}
          onPress={this.handleBtnPress} // can only do one or the other...
        >
          <Text>{this.props.id}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7E2C1",
    borderColor: "#434343",
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
  },
  position: {
    backgroundColor: "#434343",
    color: "#FFF",
    width: "100%",
  },
  dead: {
    textDecorationLine: "line-through",
    margin: 8,
    borderRadius: 5,
  },
  alive: {
    margin: 8,
    borderRadius: 5,
  },
});

const mapStateToProps = (state) => ({
  ...state.playerReducer,
});

const mapDispatchToProps = (dispatch) => ({
  putOnSpotlight: (player) => {
    dispatch(spotlight(player));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);
