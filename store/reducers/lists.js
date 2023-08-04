import { v4 as uuidv4 } from 'uuid';
const initialState = {};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      const newListName = action.payload;
      return {
        ...state,
        [newListName]: {
          id: uuidv4(),
          cards: {},
          tags: {},
          date: "",
        },
      };

    case "REORDER_LISTS":
      return {
        ...state,
        ...action.payload,
      };

    // This will need done
    case "DELETE_LIST":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default listsReducer;
