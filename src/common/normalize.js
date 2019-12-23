const defaultOptions = {
  handleKeys: k => k,
};

export default function normalize(obj, options) {
  const { handleKeys } = Object.assign(defaultOptions, options);
  return Object
    .entries(obj)
    .reduce((before, [key, value]) => ({ ...before, [handleKeys(key)]: value }), {});
}
