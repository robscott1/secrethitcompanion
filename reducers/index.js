import playerReducer from "./player";
import failedVoteReducer from "./failedVote";
import imageOrTimerReducer from "./imageOrTimer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playerReducer, 
    failedVoteReducer,
    imageOrTimerReducer
});

export default rootReducer;