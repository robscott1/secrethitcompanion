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
        playerList,
      };
      break;
    case "KILL":
      let playerList = state.players;
      let victim = playerList.find(payload.id);
      victim.alive = false;
      return {
        ...state,
        playerList,
      };
      break;

    case "ELECT":
      let playerList1 = state.players;

      //un-elect current player
      let oldChancellor = playerList1.find(function (item) {
        item.chancellor === true;
      });
      oldChancellor.chancellor = false;

      // elect new player
      let newChancellor = playerList.find(payload.id);
      newChancellor.chancellor = true;
      return {
        ...state,
        playerList,
      };
      break;

    case "PRESIDENT":
      let playerList2 = state.players;

      //un-elect current player
      let oldPresident = playerList2.find(function (item) {
        item.president === true;
      });
      oldPresident.president = false;

      // elect new player
      let newPresident = playerList.find(payload.id);
      newPresident.president = true;
      return {
        ...state,
        playerList,
      };
      break;

    default:
      return state;
      break;
  }
};

export default playerReducer;
