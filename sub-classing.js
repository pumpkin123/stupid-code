function subClassing(Super, Derived) {
  const prototype = Object.create(Super.prototype);
  Derived.prototype = prototype;
  prototype.constructor = Derived;
  Derived.__super__ = Super;
}

// usage

// Base Class
function Super(name) {
  this.name = name;
}

Super.prototype.sayHello = function() {
  return `Hello from ${this.name}`;
};

// Derived Class
function Derived(name, age) {
  Derived.__super__.call(this, name);
  this.age = age;
}

Derived.prototype.sayHello = function() {
  return Derived.__super__.prototype.sayHello.call(this) + `, age ${this.age}!`;
};

subClassing(Super, Derived);

console.log(new Derived("Tom", 23).sayHello());
