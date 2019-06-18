import reducers from "./index.js";

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({ data: {}, tweets: {} });
});

test("reducers REQUEST_API_DATA", () => {
  let state;
  state = reducers(
    { data: {}, tweets: {} },
    { type: "REQUEST_API_DATA", q: "r" }
  );
  expect(state).toEqual({ data: { loading: true, error: null }, tweets: {} });
});

test("reducers RECEIVE_API_DATA", () => {
  let state;
  state = reducers({
    data:
      { loading: true, error: null }, tweets: {}
  },
    {
      type: 'RECEIVE_API_DATA',
      data: [{
        id: 1,
        name: 'react',
        description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'
      }]
    });

  expect(state).toEqual({ data: { loading: false, error: null, items: [{ id: 1, name: 'react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.' }] }, tweets: {} });
});


test('reducers REQUEST_TWEETS', () => {
  let state;
  state = reducers({ data: { loading: false, error: null, items: [{ id: 1, name: 'react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.' }] }, tweets: {} }, { type: 'REQUEST_TWEETS', q: 'react' });

  expect(state).toEqual({ data: { loading: false, error: null, items: [{ id: 1, name: 'react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.' }] }, tweets: { loading: true, error: null } });
});

test('reducers RECEIVE_TWEETS', () => {
  let state;
  state = reducers({ data: { loading: false, error: null, items: [{ id: 1, name: 'react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.' }] }, tweets: { loading: true, error: null } }, { type: 'RECEIVE_TWEETS', tweets: [{ id: 1140940163444613100, text: 'RT @JesseRWeigel: I am live streaming now on the @freeCodeCamp YouTube channel!\n\nToday I am getting the freeCodeCamp lessons running locall…' }] });

  expect(state).toEqual({ data: { loading: false, error: null, items: [{ id: 1, name: 'react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.' }] }, tweets: { loading: false, error: null, items: [{ id: 1140940163444613100, text: 'RT @JesseRWeigel: I am live streaming now on the @freeCodeCamp YouTube channel!\n\nToday I am getting the freeCodeCamp lessons running locall…' }] } });
});




// test('reducers', () => {
//   let state;
//   state = reducers({ data: { loading: true, error: null }, tweets: {} }, { type: 'RECEIVE_API_DATA', data: [{ id: 10270250, name: 'react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.' }] });


//   expect(state).toEqual({ data: { loading: false, error: null, items: [{ id: 1, name: 'react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.' }] }, tweets: {} });
// });


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
