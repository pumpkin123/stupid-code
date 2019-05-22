const curry = function(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args.slice(0, fn.length));
    } else {
      return (...args2) => curried.apply(this, [...args, ...args2]);
    }
  };
};
