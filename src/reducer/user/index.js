import { LOGIN_SUCCESS, LOGIN_START } from "../../actions/user/index";

const initialState = {
  username: "",
  fetching: ""
}

const userReducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case LOGIN_SUCCESS: {
      newState.username = action.login;
      newState.fetching = false;

      return newState;
    }

    case LOGIN_START: {
      newState.fetching = true;

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;