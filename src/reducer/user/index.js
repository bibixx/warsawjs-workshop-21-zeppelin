import { LOGIN_SUCCESS } from "../../actions/user/index";

const initialState = {
  username: "",
  fetching: ""
}

const userReducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case LOGIN_SUCCESS: {
      newState.username = action.login;

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;