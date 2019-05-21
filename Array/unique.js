function unique(arr) {
  return [...new Set(arr)];
  // or
  // return Array.from(new Set(this));
}

module.exports = unique;
