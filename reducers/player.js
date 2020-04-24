import dbg from "../Debug";
import { compose } from "redux";

const initState = {
  players: [],
  spotLight: "init",
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

    case "DELETE":
      state.players = state.players.filter(function (item) {
        return item.id !== action.payload;
      });

      return {
        ...state,
      };
      break;

    case "KILL":
      let victim = state.players.find(function (item) {
        return item.id === action.payload;
      });

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

      return {
        ...state, // whats good with setting state here
      }; // here, makes new state obj if not same name
      break;

    case "PRESIDENT":
      let playerList = state.players;
      if (action.payload === "start") {
        playerList[0].president = true;
      } else {
        let newPres = false;
        let oldPresFound = false;
        let index = 0;
        while (newPres === false) {
          if (oldPresFound) {
            if (playerList[index].alive === true) {
              playerList[index].president = true;
              break;
            }
          } else {
            if (playerList[index].president == true) {
              playerList[index].president = false;
              oldPresFound = true;
            }
          }

          index++;
          index = playerList.length === index ? 0 : index;
        }

        playerList.forEach((player) => {
          if (player.chancellor) {
            player.chancellor = false;
          }
        });
      }

      return {
        ...state,
        playerList,
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
    case "RESET":
      return initState;
      break;
    default:
      return state;
      break;
  }
};

export default playerReducer;
