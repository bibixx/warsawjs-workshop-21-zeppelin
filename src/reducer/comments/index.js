import { COMMENTS_FETCH_START, COMMENTS_FETCH_SUCCESS } from "../../actions/comments/index";

const initialState = {
  comments: {},
  fetching: false,
};

const commentsReducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case COMMENTS_FETCH_START: {
      newState.fetching = true;
      return newState;
    }

    case COMMENTS_FETCH_SUCCESS: {
      newState.comments[action.id] = action.comments;
      newState.fetching = false;
      return newState;
    }

    // no default
  }

  return state;
}

export default commentsReducer;
