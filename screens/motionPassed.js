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
import { connect } from 'react-redux';
import { electChancellor, incrementFail } from "../actions/voteActions.js";
import PlayerList from '../components/PlayersList';

class motionPassed extends Component {
    constructor(props) {
        super(props);

        this.handleJa = this.handleJa.bind(this);
        this.handleNein = this.handleNein.bind(this);
    }

    handleJa() {
        //elect chancellor
        this.props.electChancellor();
        this.props.navigation.navigate('game');
    }

    handleNein() {
        this.props.voteFailure();
        this.props.navigation.navigate('game');
    }

    render() {
        return (
             <View>
                 <Text>Was the motion passed?</Text>
                 <PlayerList players={this.props.players} ></PlayerList>
                 <View>
                     <Button title="Nein!" onPress={this.handleNein}></Button>
                 </View>
             </View>
        );
    }
}

const mapStateToProps = state => ({
    ...state.playerReducer
});

const mapDispatchToProps = () => ({
    electChancellor: () => { dispatch(electChancellor)},
    voteFailure: () => { dispatch(incrementFail)}
});

export default connect(mapStateToProps, mapDispatchToProps)(motionPassed);