import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#434343',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    motionText: {
        fontSize: 25,
        color: '#FFF',
        marginBottom: 50
    },
    playerList: {
        width: '100%',
        height: '40%'
    },
    buttonView: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: 10,
        width: '80%',
        height: '30%',
        backgroundColor: '#F7E2C1',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        color: '#000'
    }
});

export default styles;