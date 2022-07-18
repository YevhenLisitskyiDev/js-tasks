Function.__proto__.log = function () {
  return console.log(this);
};

Function.__proto__.delay = function (delay) {
  return (...args) => setTimeout(() => this(...args), delay);
};

const someFunc = function () {
  return console.log(arguments);
};

someFunc.log();

const someFuncWithDelay = someFunc.delay(1000);

someFuncWithDelay(2, 3, 4);
