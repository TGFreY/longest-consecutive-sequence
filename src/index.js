module.exports = function longestConsecutiveLength(array) {
  let maxChainLength = 0;
  let collection = new Set(array);

  for (let number of array) {
    let currentChain = number + 1;
    let currentChainLength = 1;
    while (collection.has(currentChain++)) {
      currentChainLength++;
    }
    maxChainLength = Math.max(maxChainLength, currentChainLength);
  }
  return maxChainLength;
}
