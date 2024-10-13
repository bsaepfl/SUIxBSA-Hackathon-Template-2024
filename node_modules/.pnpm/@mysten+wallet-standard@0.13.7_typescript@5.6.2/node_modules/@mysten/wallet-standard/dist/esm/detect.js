const REQUIRED_FEATURES = [
  "standard:connect",
  "standard:events"
];
function isWalletWithRequiredFeatureSet(wallet, additionalFeatures = []) {
  return [...REQUIRED_FEATURES, ...additionalFeatures].every(
    (feature) => feature in wallet.features
  );
}
export {
  isWalletWithRequiredFeatureSet
};
//# sourceMappingURL=detect.js.map
