import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  ADD_SEARCH_TERM
} from "./types";

export const fetchPosts = q => (dispatch, getState) => {
  console.log("fetching!!!!!!!");

  console.log("searchterms", getState().searchTerms);

  const waitingFor = q;
  if (!q) {
    dispatch({
      type: FETCH_POSTS,
      payload: []
    });
  } else {
    //  .filter(s => s===q).length
    dispatch({ type: ADD_SEARCH_TERM, payload: q });
    dispatch({ type: FETCH_POSTS_REQUEST, loading: true });
    fetch("https://api.github.com/search/repositories?q=" + q)
      .then(res => {
        if (res.status === 200) {
          // Only bother with this XHR response
          // if this query term matches what we're waiting for.
          if (q === waitingFor) {
            res.json().then(posts =>
              dispatch({
                type: FETCH_POSTS,
                payload: posts.items
              })
            );
          }
        }
      })
      .catch(error =>
        dispatch({
          type: FETCH_POSTS_ERROR,
          payload: error,
          error: true
        })
      );
  }
};
