var module = (function() {
  var obj = {
    add(a, b) {
      return a + b;
    },
    mul(a, b) {
      return Array.from({ length: b }).reduce(acc => this.add(acc, a), 0);
    }
  };

  return {
    execute(name, ...args) {
      if (obj[name] && typeof obj[name] === "function") {
        return obj[name](...args);
      }
    }
  };
})();

console.log(module.execute("mul", 4, 2));
