function compose(...pipes) {
  return v => pipes.reduce((before, fn) => fn(before), v);
}

export default compose;
