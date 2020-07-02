/**
 * Returns the raw prototype of an input value.
 * @since 0.0.1
 * @memberof module:typesnitch/utils
 * @param {*} any
 * @return {String}
 */
function getPrototype (obj) {
  return Object.prototype.toString.call(obj)
  // .slice(8, -1)
  // .toLowerCase()
}

/**
 * Returns the raw constructor of an input value.
 * @since 0.0.1
 * @memberof module:typesnitch/utils
 * @param {*} any
 * @return {String}
 */
function getConstructorString (obj) {
  if (!obj) { return '' }
  return obj.constructor
    .toString()
    .replace(/(\s{.*})|(function )|\(\)/g, '')
    // .toLowerCase()
}

/**
 *
 * @param {*} obj Any Object or Value
 * @param {String} type
 */
function isType(obj, type) {
  return getPrototype(obj)
    .toLowerCase()
    .indexOf(type.toLowerCase()) !== -1
}

module.exports = {
  getConstructorString,
  getPrototype
}
