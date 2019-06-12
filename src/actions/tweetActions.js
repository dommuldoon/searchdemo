import {
  FETCH_TWEETS_REQUEST,
  FETCH_TWEETS,
  FETCH_TWEETS_ERROR
} from "./types";

export const fetchTweets = q => dispatch => {
  console.log("fetching!!!!!!!");
  const waitingFor = q;
  if (!q) {
    dispatch({
      type: FETCH_TWEETS,
      payload: []
    });
  } else {
    dispatch({ type: FETCH_TWEETS_REQUEST, loading: true });
    fetch(`/api/tweets?q=${q}`)
      .then(response => response.json())
      .then(tweets =>
        dispatch({
          type: FETCH_TWEETS,
          payload: tweets.items
        })
      )
      .catch(error =>
        dispatch({
          type: FETCH_TWEETS_ERROR,
          payload: error,
          error: true
        })
      );
  }
};
