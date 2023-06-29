import Car from './10-car';

export default class EVCar extends Car {
  /**
     *
     * @param {String} brand
     * @param {String} motor
     * @param {String} color
     * @param {String} range
     */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; /* eslint-disable-line no-underscore-dangle */
  }

  cloneCar() {
    /* eslint-disable-next-line guard-for-in */
    for (const prop in this) {
      this[prop] = undefined;
      if (prop === '_range') {
        delete this[prop];
      }
    }
    return Object.assign(Object.create(new Car()), this);
  }
}
