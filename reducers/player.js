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
      console.log(state.players);
      let playerList = state.players;
      console.log("DBG Console - playerReducer.. playerList.." + playerList);
      let victim = state.players.find(function (item) {
        return item.id === action.payload;
      });
      console.log("DBG Console - playerReducer.. victim..");
      victim.alive = false;

      return {
        ...state,
      };
      break;

    case "ELECT":
      let playerList1 = state.players;

      // un-elect current player
      let oldChancellor = playerList1.find(function (item) {
        return item.chancellor === true;
      });
      console.log(
        "DBG Console - playercard: oldChancellor... " + oldChancellor
      );
      if (oldChancellor != undefined) {
        console.log("DBG Console - playercard.. dethroning chancellor... ");
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
