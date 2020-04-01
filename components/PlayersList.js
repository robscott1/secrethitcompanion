import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import PlayerCard from "./PlayerCard";

class PlayerList extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { name: "Android", chancellor: "false", president: "false", alive: "true" },
            { name: "iOS", chancellor: "false", president: "false", alive: "true"  },
            { name: "Java", chancellor: "false", president: "false", alive: "true"  },
            { name: "Swift", chancellor: "false", president: "false", alive: "true"  },
            { name: "Php", chancellor: "false", president: "false", alive: "true"  },
            { name: "Hadoop", chancellor: "false", president: "false", alive: "true"  },
            { name: "Sap", chancellor: "false", president: "false", alive: "true"  },
            { name: "Python", chancellor: "false", president: "false", alive: "true"  },
            { name: "C++", chancellor: "false", president: "false", alive: "true"  }
          ]}
          renderItem={({ item }) => (
            <PlayerCard name={item.name} chancellor={item.chancellor} president={item.president} alive={item.alive}/>
          )}
          numColumns={2}
          contentContainerStyle={{
            width: "100%",
            justifyContent: "center",
            alignContent: "center"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    padding: 20
  }
});

export default PlayerList;
