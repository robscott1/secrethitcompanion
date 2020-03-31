import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

class PlayerList extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "Android" },
            { key: "iOS" },
            { key: "Java" },
            { key: "Swift" },
            { key: "Php" },
            { key: "Hadoop" },
            { key: "Sap" },
            { key: "Python" },
            { key: "C++" }
          ]}
          renderItem={({ item }) => (
            <Button title={item.key} style={styles.item} />
          )}
          numColumns={2}
          contentContainerStyle={{
            width: "100%",
            justifyContent: "cemter",
            alignContent: "center",
            backgroundColor: "skyblue"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: "45%",
    padding: 20
  }
});

export default PlayerList;
