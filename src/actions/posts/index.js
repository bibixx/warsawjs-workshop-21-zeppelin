import { API_URL } from "../../constants";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCESS";

export const fetchStart = () => ({ type: FETCH_START })
export const fetchSuccess = (posts) => ({ type: FETCH_SUCCESS, payload: posts })

export const fetchPosts = () => async dispatch => {
  dispatch(fetchStart());
  
  const { posts } = await fetch(`${API_URL}/posts/`).then(res => res.json());

  const postsWithoutComments = posts.map(({ commentsCount, ...rest }) => ({...rest}));
  
  dispatch(fetchSuccess(postsWithoutComments));
};