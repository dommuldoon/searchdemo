export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const REQUEST_TWEETS = "REQUEST_TWEETS";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export const requestApiData = q => ({
  type: REQUEST_API_DATA,
  q
});

export const receiveApiData = data => ({
  type: RECEIVE_API_DATA,
  data
});

export const requestTweets = q => ({
  type: REQUEST_TWEETS,
  q
});

export const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});
