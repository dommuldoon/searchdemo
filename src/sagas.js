import { call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import {
  REQUEST_API_DATA,
  receiveApiData,
  REQUEST_TWEETS,
  receiveTweets
} from "./actions";
import { fetchData, fetchTweets } from "./api";

function* getRepos(action) {
  yield delay(300);
  try {
    // do api call
    const data = yield call(fetchData, action.q);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* mySaga() {
  console.log("take latest");
  yield takeLatest(REQUEST_API_DATA, getRepos);
}

function* getTweets(action) {
  try {
    // do api call

    const data = yield call(fetchTweets, action.q);
    yield put(receiveTweets(data));
  } catch (e) {
    console.log(e);
  }
}

export function* mySaga2() {
  console.log("take latest2");
  yield takeLatest(REQUEST_TWEETS, getTweets);
}
