import { ADD } from "../constants";

export const add = () => {
  console.log("ADD");
  return { type: ADD };
};