import { combineReducers } from "redux";

const user = (state = null) => state;

// const cars = (state = [], action) => {
//     return state
// }
const cars = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_CAR":
      return [...state, action.value];
    case "REMOVE_CAR":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;

    default:
      return state;
  }
};

export default combineReducers({ user, cars });