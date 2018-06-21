import { FETCH_START, FETCH_SUCCESS } from "../../actions/posts/index";

const initialState = {
  posts: [],
  fetching: false,
}

const reducer = (state = initialState, action) => {
  const newState = {...state};
  newState.posts = [...newState.posts].map(p => ({...p}));

  switch (action.type) {
    case FETCH_START: {
      newState.fetching = true;

      break;
    }

    case FETCH_SUCCESS: {
      newState.posts = action.payload;
      newState.fetching = false;

      break;
    }

    // no default
  }

  return newState;
};

export default reducer;