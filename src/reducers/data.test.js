import { REQUEST_API_DATA, RECEIVE_API_DATA } from "../actions";
import reducer from "./data.js";

import reducers from "./index.js";

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({ data: {}, tweets: {} });
});

test("reducers", () => {
  let state;
  state = reducers(
    { data: {}, tweets: {} },
    { type: "REQUEST_API_DATA", q: "r" }
  );
  expect(state).toEqual({ data: { loading: true, error: null }, tweets: {} });
});

test("reducers", () => {
  let state;
  state = reducers(
    { data: { loading: true, error: null }, tweets: {} },
    {
      type: "RECEIVE_API_DATA",
      data: {
        total_count: 898601,
        incomplete_results: false,
        items: [{ id: 1, name: "repo 1" }]
      }
    }
  );

  expect(state).toEqual({
    data: {
      loading: false,
      error: null,
      items: {
        total_count: 898601,
        incomplete_results: false,
        items: [{ id: 1, name: "repo 1" }]
      }
    },
    tweets: {}
  });
});

// describe("data reducer", () => {
//   it("should return the initial state", () => {
//     expect(reducer(undefined, {})).toEqual({});
//   });

//   it("should handle REQUEST_API_DATA", () => {
//     expect(
//       reducer([], {
//         type: REQUEST_API_DATA,
//         text: "Some Param"
//       })
//     ).toEqual({
//       loading: true,
//       error: null
//     });

//     expect(
//       reducer(
//         {
//           loading: true,
//           error: null
//         },
//         {
//           type: REQUEST_API_DATA,
//           text: "Some Param"
//         }
//       )
//     ).toEqual({
//       loading: true,
//       error: null
//     });
//   });

//   it("should handle RECEIVE_API_DATA", () => {
//     const data = "First data";
//     const moreData = "Second data";
//     expect(
//       reducer(
//         {},
//         {
//           type: RECEIVE_API_DATA,
//           items: "First data"
//         }
//       )
//     ).toEqual({
//       loading: false,
//       items: "First data"
//     });

//     expect(
//       reducer(
//         {
//           loading: false,
//           items: moreData
//         },
//         {
//           type: RECEIVE_API_DATA,
//           items: data
//         }
//       )
//     ).toEqual({
//       loading: false,
//       items: [data, moreData]
//     });
//   });
// });
