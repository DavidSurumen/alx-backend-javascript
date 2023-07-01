import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
    this._carConstructor = Car;
  }

  cloneCar() {
    return new this._carConstructor();
  }
}
