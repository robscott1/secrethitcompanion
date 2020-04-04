const failedVoteReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return 0;
    }
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