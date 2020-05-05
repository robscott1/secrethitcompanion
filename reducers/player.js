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
      let oldDuke = state.players.find(function (item) {
        return item.duke === true;
      });
      if (oldDuke != undefined) {
        oldDuke.duke = false;
      }

      // elect new player
      let newDuke = state.players.find(function (item) {
        return item.id === action.payload;
      });
      newDuke.duke = true;

      return {
        ...state, // whats good with setting state here
      }; // here, makes new state obj if not same name
      break;

    case "KING":
      console.log("action triggered.. state before...");
      console.log(state.players);
      //let playerList = state.players;
      if (action.payload === "start") {
        state.players[0].king = true;
      } else {
        let newPres = false;
        let oldPresFound = false;
        let index = 0;
        while (newPres === false) {
          if (oldPresFound) {
            if (state.players[index].alive === true) {
              state.players[index].king = true;
              break;
            }
          } else {
            if (state.players[index].king == true) {
              state.players[index].king = false;
              oldPresFound = true;
            }
          }

          index++;
          index = state.players.length === index ? 0 : index;
        }

        state.players.forEach((player) => {
          if (player.duke) {
            player.duke = false;
          }
        });
      }

      return {
        ...state,
      };
      break;

    case "RESET":
      state.players = [];
      return {
        ...state,
      };
      break;
    default:
      return state;
      break;
  }
};

export default playerReducer;
