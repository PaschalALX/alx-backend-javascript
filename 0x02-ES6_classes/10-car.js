export default class Car {
  /**
     *
     * @param {String} brand
     * @param {String} motor
     * @param {String} color
     */
  constructor(brand, motor, color) {
    this._brand = brand; /* eslint-disable-line no-underscore-dangle */
    this._motor = motor; /* eslint-disable-line no-underscore-dangle */
    this._color = color; /* eslint-disable-line no-underscore-dangle */
  }

  cloneCar() {
    return Object.assign(Object.create(this), this);
  }
}
