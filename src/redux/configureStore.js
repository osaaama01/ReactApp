import { createStore, combineReducers } from "redux";
import { Comments } from "./comment";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import { Dishes } from "./dishes";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      leaders: Leaders,
      promotions: Promotions,
      comments: Comments,
    })
  );
  return store;
};
