import styles from './MotionPassedStyles';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Keyboard
} from "react-native";
import { connect } from 'react-redux';
import { electChancellor, incrementFail } from "../actions/voteActions.js";
import PlayerList from '../components/PlayersList';

class MotionPassed extends Component {
    constructor(props) {
        super(props);

        this.handleNein = this.handleNein.bind(this);
        this.handleJa = this.handleJa.bind(this);
    }

    handleNein() {
        this.props.voteFailure();
        this.props.navigation.navigate('game');
    }

    handleJa() {
        this.props.navigation.navigate('chooseChancellor');
    }

    render() {
        return (
             <View style={styles.container}>
                 <Text style={styles.motionText}>Was the motion passed?</Text>
                 <View style={styles.buttonView}>
                    <TouchableOpacity
                        onPress={this.handleJa} 
                        style={styles.button}>
                        <Text style={styles.text}>JA!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.handleNein} 
                        style={styles.button}>
                        <Text style={styles.text}>NEIN!</Text>
                    </TouchableOpacity>
                 </View>
             </View>
        );
    }
}

const mapStateToProps = state => ({
    ...state.playerReducer
});

const mapDispatchToProps = dispatch => ({
    electChancellor: () => { dispatch(electChancellor)},
    voteFailure: () => { dispatch(incrementFail)}
});

export default connect(mapStateToProps, mapDispatchToProps)(MotionPassed);