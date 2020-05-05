export const addPlayer = (payload) => {
  return {
    type: "CREATE",
    payload,
  };
};

export const deletePlayer = (payload) => {
  return {
    type: "DELETE",
    payload,
  };
};

export const killPlayer = (payload) => {
  return {
    type: "KILL",
    payload,
  };
};

export const electDuke = (payload) => {
  return {
    type: "ELECT",
    payload,
  };
};

export const makeKing = (payload) => {
  return {
    type: "KING",
    payload,
  };
};

export const spotlight = (payload) => {
  return {
    type: "SPOTLIGHT",
    payload,
  };
};

export const resetPlayers = (payload) => {
  return {
    type: "RESET",
    payload,
  };
};
