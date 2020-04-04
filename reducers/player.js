const initState = {
    players: []
}

const playerReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE':
            let players = state.players;
            players.push(action.payload);
            return {
                ...state,
                players
            };
            break
        case 'KILL':
            return state;
            break
        case 'ELECT':
            return state;
            break
        case 'PRESIDENT':
            return state;
            break
        default:
            return state;
            break
    }
};

export default playerReducer;