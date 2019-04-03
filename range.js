const range = function* (start, end, step = 1) {
  let x = start;
  while (x < end) {
    yield x;
    x += step;
  }
}

for (let i of range(0, 10)) {
  console.log(i)
}