import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Keyboard
} from "react-native";

class Vote extends Component {
    constructor(props) {
        super(props);

        this.handleTime = this.handleTime.bind(this);
    }

    state = {
        time: 5
    };

    handleTime() {
        if (this.state.time == -3) {
            this.props.navigation.navigate('motionPassed');
        }

        this.setState({
            time: this.state.time - 1
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.handleTime, 1000);
    }

    componentDidUpdate() {
        if (this.state.time < -3) {
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        var timerText = this.state.time;
        if (this.state.time < 1) {
            timerText = "Vote!";
        }       
        return (
             <View>
                <Text>{timerText}</Text>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#434343',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timerText: {

    }
})

export default Vote;