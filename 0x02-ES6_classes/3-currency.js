export default class Currency {
  /**
     *
     * @param {String} code
     * @param {String} name
     */
  constructor(code, name) {
    this._code = code; /* eslint-disable-line no-underscore-dangle */
    this._name = name; /* eslint-disable-line no-underscore-dangle */
  }

  get code() {
    return this._code; /* eslint-disable-line  no-underscore-dangle */
  }

  set code(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value; /* eslint-disable-line  no-underscore-dangle */
  }

  get name() {
    return this._name; /* eslint-disable-line  no-underscore-dangle */
  }

  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value; /* eslint-disable-line  no-underscore-dangle */
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
