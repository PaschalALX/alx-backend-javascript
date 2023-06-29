export default class Building {
  /**
     *
     * @param {Number} sqft
     */
  constructor(sqft) {
    this._sqft = sqft; /* eslint-disable-line no-underscore-dangle */
    const methodKeys = Object.getOwnPropertyNames(this.constructor.prototype);
    if (methodKeys.indexOf('evacuationWarningMessage') === -1) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this._sqft; /* eslint-disable-line no-underscore-dangle */
  }

  evacuationWarningMessage() {} /* eslint-disable-line class-methods-use-this */
}
