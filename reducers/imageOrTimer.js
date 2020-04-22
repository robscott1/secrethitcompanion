initState = {
    timerOn: false,
    countdown: 300,
}

const imageOrTimerReducer = (state = initState, action) => {
    switch(action.type) {
        case 'START':
            return {
                timerOn: true,
                countdown: 300
            }
            break;
        case 'STOP':
            return {
                timerOn: false,
                countdown: 300
            }
            break;
        case 'DECREMENT':
                if (state.countdown <= 0) {
                    return {
                        timerOn: false,
                        countdown: 300
                    }
                }
                else if (state.timerOn) {
                    return {
                        timerOn: true,
                        countdown: state.countdown - 1,
                    }
                } else {
                    return state;
                }
            break;
        default:
            return state
            break;
    }
};

export default imageOrTimerReducer;