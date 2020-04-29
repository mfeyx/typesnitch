/**
 * Returns the raw prototype of an input value.
 * @since 0.0.1
 * @memberof module:typesnitch/utils
 * @param {*} any
 * @return {String}
 * // out: 'Object'
 */
function prototype (obj) {
  return Object.prototype.toString.call(obj)
}

module.exports = prototype
