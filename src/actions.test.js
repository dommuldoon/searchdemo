import * as actions from "./actions";

describe("actions", () => {
  it("should create an action to request api data", () => {
    const q = "Some param";
    const expectedAction = {
      type: actions.REQUEST_API_DATA,
      q
    };
    expect(actions.requestApiData(q)).toEqual(expectedAction);
  });
  it("should create an action to recieve api data", () => {
    const data = "Some data";
    const expectedAction = {
      type: actions.RECEIVE_API_DATA,
      data
    };
    expect(actions.receiveApiData(data)).toEqual(expectedAction);
  });
  it("should create an action to request tweets", () => {
    const q = "Some param";
    const expectedAction = {
      type: actions.REQUEST_TWEETS,
      q
    };
    expect(actions.requestTweets(q)).toEqual(expectedAction);
  });
  it("should create an action to recieve tweets", () => {
    const tweets = "Some Tweets";
    const expectedAction = {
      type: actions.RECEIVE_TWEETS,
      tweets
    };
    expect(actions.receiveTweets(tweets)).toEqual(expectedAction);
  });
});
