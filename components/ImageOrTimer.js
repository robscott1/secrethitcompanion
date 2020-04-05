import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

class ImageOrTimer extends Component {
  //this state or props will decide when this
  // changes into timer or image
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../imagefolder/game-title.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20,
  },
});

export default ImageOrTimer;
