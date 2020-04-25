import { ADD_INGREDIENTS, DELETE_INGREDIENTS } from "../constants/actionTypes";

export function addIngredients(text) {
  return {
    type: ADD_INGREDIENTS,
    text,
  };
}

export function deleteIngredients(index) {
  return {
    type: DELETE_INGREDIENTS,
    index,
  };
}
