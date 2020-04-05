import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import PlayerCard from "./PlayerCard";

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.triggerAction = this.triggerAction.bind(this);
  }

  triggerAction(item) {
    this.props.triggerAction("playerAction");
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
              onPress={this.triggerAction}
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

export default PlayerList;
