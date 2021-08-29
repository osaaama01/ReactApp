import { createStore, combineReducers, applyMiddleware } from "redux";
import { Comments } from "./comment";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import { Dishes } from "./dishes";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      leaders: Leaders,
      promotions: Promotions,
      comments: Comments,
    }),
    applyMiddleware(thunk,logger)
  );
  return store;
};
