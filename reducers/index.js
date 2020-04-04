import playerReducer from "./player";
import failedVoteReducer from "./failedVote";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playerReducer, 
    failedVoteReducer
});

export default rootReducer;