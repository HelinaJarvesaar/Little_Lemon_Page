export function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
}

export function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // You can use action.date later to change logic
      return initializeTimes();
    default:
      return state;
  }
}
