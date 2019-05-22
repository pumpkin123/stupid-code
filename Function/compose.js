const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => fn(res), args);
