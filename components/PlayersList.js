import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import PlayerCard from "./PlayerCard";

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    console.log("press handled");
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
              nav={this.props.nav}
              handlePress={this.props.handlePress}
              purpose={this.props.purpose}
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
    height: "45%",
    padding: 10,
  },
});

export default PlayerList;
