import { REQUEST_API_DATA, RECEIVE_API_DATA } from "../actions";

interface IRepo {
  id: number;
  name: string;
  description: string;
}

export default (state = {}, { type, data }: { [key: string]: any }) => {
  switch (type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };
    case RECEIVE_API_DATA:
      return {
        ...state,
        loading: false,
        items: data
      };
    default:
      return state;
  }
};
