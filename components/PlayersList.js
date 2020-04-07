import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import PlayerCard from "./PlayerCard";
import { connect } from "react-redux";
import { spotlight } from "../actions";

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(player) {
    console.log(
      "**DBG Console - PList: handlePress triggered.. " + player.name
    );
    this.props.putOnSpotlight(player);
    this.props.handlePress;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.players}
          renderItem={({ item }) => (
            <PlayerCard
              id={item.id}
              chancellor={item.chancellor}
              president={item.president}
              alive={item.alive}
              handlePress={this.props.handlePress}
            />
          )}
          numColumns={2}
          contentContainerStyle={{
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    padding: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
