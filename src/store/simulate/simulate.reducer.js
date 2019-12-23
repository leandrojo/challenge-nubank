const initialState = {
  type: 'simulate/init',
  payload: {
    input: {
      initialAmount: 1000,
      interest: 0.5,
      period: 60,
    },
    output: {
      gross: 0,
      tax: 0,
      violations: [],
    },
  },
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === 'simulate/input') {
    return { type, payload: { ...state.payload, input: payload } };
  }

  if (type === 'simulate/output') {
    return { type, payload: { ...state.payload, output: payload } };
  }

  return state;
}

export default reducer;
