function withResolvers() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, reject, resolve };
}
export {
  withResolvers
};
//# sourceMappingURL=withResolvers.js.map
