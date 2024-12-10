import { ADD_USER } from "./constant.js";

const intialState = {
  users: [],
};

export default function userReducer(state = intialState, action) {
  if (action.type === ADD_USER) {
    return {
      ...state,
      users: [...state.users, action.payload],
    };
  } else {
    return state;
  }
}
