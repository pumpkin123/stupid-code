const take = n =>
  function*(iter) {
    let x;
    while (((x = iter.next()), !x.done && n)) {
      yield x.value;
      n--;
    }
  };
