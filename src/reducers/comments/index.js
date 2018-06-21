const initialState = {
  fetching: false,
  comments: {},
}

const reducer = (state = initialState, action) => {
  const newState = {...state};
  newState.comments = {...newState.comments};

  switch (action.type) {
    // no default
  }

  return newState;
}

export default reducer;