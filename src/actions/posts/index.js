export const POSTS_FETCHING_START = "POSTS_FETCHING_START";
export const POSTS_FETCHING_SUCCESS = "POSTS_FETCHING_SUCCESS";
export const POSTS_CREATE_SUCCESS = "POSTS_CREATE_SUCCESS";

export const postsStart = () => ({ type: POSTS_FETCHING_START });
export const postsSuccess = (posts) => ({ type: POSTS_FETCHING_SUCCESS, posts });

export const postCreateSuccess = (post) => ({ type: POSTS_CREATE_SUCCESS, post });

export const postsFetch = () => async dispatch => {
  dispatch(postsStart());

  const response = await fetch("https://warsawjs-21-api.herokuapp.com/posts/")
    .then(res => res.json());

  dispatch(postsSuccess(response.posts));
}

export const postCreate = formData => async (dispatch, getState) => {
  const state = getState();

  formData.append("username", state.user.username);

  const response = await fetch(`https://warsawjs-21-api.herokuapp.com/posts/`, {
    method: "POST",
    body: formData,
  }).then(res => res.json());

  if (response.ok) {
    dispatch(postCreateSuccess(response.post));
  }
}
