Function.__proto__.log = function () {
  return console.log(this);
};

Function.__proto__.delay = function (delay) {
  return () => setTimeout(this, delay);
};

const someFunc = () => {
  return console.log(3);
};

someFunc.log();

const someFuncWithDelay = someFunc.delay(1000);

someFuncWithDelay();
