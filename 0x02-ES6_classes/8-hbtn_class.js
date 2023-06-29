export default class HolbertonClass {
  /**
     *
     * @param {Number} size
     * @param {String} location
     */
  constructor(size, location) {
    this._size = size; /* eslint-disable-line no-underscore-dangle */
    this._location = location; /* eslint-disable-line no-underscore-dangle */
  }

  valueOf() {
    return this._size; /* eslint-disable-line no-underscore-dangle */
  }

  toString() {
    return this._location; /* eslint-disable-line no-underscore-dangle */
  }
}
