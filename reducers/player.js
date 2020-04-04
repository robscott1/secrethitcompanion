const playerReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return 0;
    }
    switch(action.type) {
        case 'CREATE':
            return state;
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