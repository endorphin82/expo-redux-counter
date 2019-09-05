import { ADD } from "../constants";

export default (state = {count:0}, action) => {
  const { type } = action;

  switch (type) {
    case ADD:
      console.log(state);
      return { count: state.count + 1}
    default:
      return state;
  }
}