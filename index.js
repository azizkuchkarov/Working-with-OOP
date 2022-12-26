const firstName = "Aziz Kuchkarov";
const nameByString = new String(firstName);

console.log(typeof firstName);

console.log(typeof nameByString);

const car = {
  motor: "X",
  color: "red",
  isAirbag: true,
  isSpeed: function () {
    console.log(320);
  },
};

const gmCar = {
  isAirbag: false,
};

Object.setPrototypeOf(gmCar, car);
console.log(gmCar);
const bmw = Object.create(car);
console.log(bmw);
