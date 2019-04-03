const range = function* (start, end, step = 1) {
  let x = start;
  while (x < end) {
    yield x;
    x += step;
  }
}

module.exports = range