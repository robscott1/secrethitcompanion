const initState = {
  players: [],
};

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE":
      let players = state.players;
      players.push(action.payload);
      return {
        ...state,
        players,
      };
      break;
    case "KILL":
      let players = state.players;
      let victim = players.find(payload.id);
      victim.alive = false;
      return {
        ...state,
        players,
      };
      break;

    case "ELECT":
      let players = state.players;

      //un-elect current player
      let oldChancellor = players.find(function (item) {
        item.chancellor === true;
      });
      oldChancellor.chancellor = false;

      // elect new player
      let newChancellor = players.find(payload.id);
      newChancellor.chancellor = true;
      return {
        ...state,
        players,
      };
      break;

    case "PRESIDENT":
      let players = state.players;

      //un-elect current player
      let oldPresident = players.find(function (item) {
        item.president === true;
      });
      oldPresident.president = false;

      // elect new player
      let newPresident = players.find(payload.id);
      newPresident.president = true;
      return {
        ...state,
        players,
      };
      break;

    default:
      return state;
      break;
  }
};

export default playerReducer;
