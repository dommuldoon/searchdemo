import { REQUEST_TWEETS, RECEIVE_TWEETS } from "../actions";

export default (state = {}, { type, tweets }: {[key: string]: any}) => {
  switch (type) {
    case REQUEST_TWEETS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case RECEIVE_TWEETS:
      return {
        ...state,
        loading: false,
        items: tweets
      };
    default:
      return state;
  }
};
