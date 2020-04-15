import dbg from "../Debug";

const initState = {
  players: [],
  spotLight: "init",
};

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE":
      let players = state.players;
      console.log(action.payload);
      players.push(action.payload);
      return {
        ...state,
        players,
      };
      break;

    case "KILL":
      dbg("Player Reducer", "Players", state.players);

      let victim = state.players.find(function (item) {
        return item.id === action.payload;
      });
      dbg("Player Reducer", "victim", victim.name);
      victim.alive = false;

      return {
        ...state,
      };
      break;

    case "ELECT":
      // un-elect current player
      let oldChancellor = state.players.find(function (item) {
        return item.chancellor === true;
      });
      if (oldChancellor != undefined) {
        oldChancellor.chancellor = false;
      }

      // elect new player
      let newChancellor = state.players.find(function (item) {
        return item.id === action.payload;
      });
      newChancellor.chancellor = true;

      console.log(state.players);

      return {
        ...state, // whats good with setting state here
      }; // here, makes new state obj if not same name
      break;

    case "PRESIDENT":
      let playerList2 = state.players;

      //un-elect current player
      let oldPresident = playerList2.find(function (item) {
        item.president === true;
      });
      oldPresident.president = false;

      // elect new player
      let newPresident = playerList.find(state.spotLight.id);
      newPresident.president = true;

      return {
        ...state,
        playerList2,
      };
      break;

    case "SPOTLIGHT":
      var pList = state.players;
      var spotLight = action.payload;

      return {
        ...state,
        pList,
        spotLight,
      };
      break;

    default:
      return state;
      break;
  }
};

export default playerReducer;
