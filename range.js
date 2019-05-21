// 使用generator实现的版本
const range = function*(start, end, step = 1) {
  let x = start;
  while (x < end) {
    yield x;
    x += step;
  }
};

// 如果想得到一个数组

const rangeAsArray = (start, end, step = 1) => {
  return Array.from({ length: Math.ceil((end - start) / step) }, (v, i) => {
    return start + i * step;
  });
};

// console.log(rangeAsArray(2,9,2))

// 当然也可以这样

const rangeAsArray2 = (...args) => [...range(...args)];

// console.log(rangeAsArray2(2,9,2))
