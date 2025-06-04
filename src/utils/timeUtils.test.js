import { initializeTimes, timesReducer } from './timeUtils';

test("initializeTimes returns correct initial times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toEqual(expectedTimes);
});

test("timesReducer returns initialized times on UPDATE_TIMES", () => {
  const initialState = [];
  const action = { type: "UPDATE_TIMES", date: "2025-06-04" };
  const newState = timesReducer(initialState, action);
  expect(newState).toEqual(initializeTimes());
});
