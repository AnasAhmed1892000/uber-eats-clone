import { createStore } from "redux";
import reducer from "./Reducers/Index";

export default function configureStore(initialState) {
  return createStore(reducer, initialState);
}
