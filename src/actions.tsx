export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const REQUEST_TWEETS = "REQUEST_TWEETS";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export const requestApiData = (q: string) => ({
  type: REQUEST_API_DATA,
  q
});

export const receiveApiData = (data: any[]) => ({
  type: RECEIVE_API_DATA,
  data
});

export const requestTweets = (q: string) => ({
  type: REQUEST_TWEETS,
  q
});

export const receiveTweets = (tweets: any[]) => ({
  type: RECEIVE_TWEETS,
  tweets
});
