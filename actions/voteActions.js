export const incrementFail = {
    type: "INCREMENT"
};

export const resetVote = (payload) => {
  return {
    type: "RESET",
    payload,
  };
};