const initialState = {
   titleBody: "My Board"
}

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default titleReducer;
