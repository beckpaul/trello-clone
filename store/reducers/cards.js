const initialState = []

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        ...action.payload,
      };
    // This will need done
    case "REMOVE_CARD":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default cardsReducer;
