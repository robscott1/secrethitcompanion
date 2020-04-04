const initState = {
    failedVotes: 0
}

const failedVoteReducer = (state = initState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            if (state.failedVotes ==2) {
                //enact policy
                return {
                    failedVotes: 0
                };
            } 

            return {
                failedVotes: state.failedVotes + 1
            };
            break;
        default:
            return state;
            break;
    }
};

export default failedVoteReducer;