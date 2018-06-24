import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";
import userReducer from "./reducer/user/index";
import postsReducer from "./reducer/posts/index";
import commentsReducer from "./reducer/comments/index";

const store = createStore(
  combineReducers({
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
  }),
  applyMiddleware(thunk, logger)
);

export default store;