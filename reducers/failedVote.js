const initState = {
    failedVotes: 0
}

const failedVoteReducer = (state = initState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state;
            break;
        case 'RESET':
            return state;
            break;
        default:
            return state;
            break;
    }
};

export default failedVoteReducer;