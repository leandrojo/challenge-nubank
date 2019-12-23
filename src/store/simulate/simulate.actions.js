export function output(payload) {
  return {
    type: 'simulate/output',
    payload,
  };
}

export function input(payload) {
  return {
    type: 'simulate/input',
    payload,
  };
}
