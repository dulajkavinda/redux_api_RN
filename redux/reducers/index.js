import { ADD_INGREDIENTS, DELETE_INGREDIENTS } from "../constants/actionTypes";

const initialState = {
  ingredients: [],
  recipie: "Fruitsalads",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INGREDIENTS:
      return Object.assign({}, state, {
        ingredients: state.ingredients.concat(action.text),
      });
    case DELETE_INGREDIENTS:
      return Object.assign({}, state, {
        ingredients: state.ingredients
          .slice(0, action.index)
          .concat(state.ingredients.slice(action.index + 1)),
      });
    default:
      return state;
  }
}

export default rootReducer;
