export const addPlayer = (payload) => {
  return {
    type: "CREATE",
    payload,
  };
};

export const killPlayer = (payload) => {
  return {
    type: "KILL",
    payload,
  };
};

export const electChancellor = (payload) => {
  return {
    type: "ELECT",
    payload,
  };
};

export const makePresident = (payload) => {
  return {
    type: "PRESIDENT",
    payload,
  };
};

export const spotlight = (payload) => {
  return {
    type: "SPOTLIGHT",
    payload,
  };
};
