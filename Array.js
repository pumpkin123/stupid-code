class CustomArray extends Array {
  unique() {
    return [...new Set(this)];
    // or
    // return Array.from(new Set(this));
  }
}

const arr = new CustomArray(1, 2, 3, 4, 3, 2, 5);

console.log(arr.unique());
