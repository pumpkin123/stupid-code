const curry = func => {
  let actual_params_num = 0;
  let params = [];

  const _curry = (...args) => {
    actual_params_num += args.length;
    params = [...params, ...args].slice(0, func.length);

    if (actual_params_num >= func.length) {
      return func(...params);
    } else {
      return _curry;
    }
  };
  return _curry;
};

module.exports = curry;
