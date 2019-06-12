import {
  FETCH_TWEETS_REQUEST,
  FETCH_TWEETS,
  FETCH_TWEETS_ERROR
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TWEETS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_TWEETS:
      console.log("reducer");
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case FETCH_TWEETS_ERROR:
      console.log("reducer");
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
}
