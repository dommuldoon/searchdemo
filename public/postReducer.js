import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  ADD_SEARCH_TERM
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  loading: false,
  error: null,
  searchTerms: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POSTS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message
      };
    case ADD_SEARCH_TERM:
      return {
        ...state,
        searchTerms: [...state.searchTerms, action.payload]
      };
    default:
      return state;
  }
}
