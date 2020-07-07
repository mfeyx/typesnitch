/**
 * Returns the raw prototype of an input value.
 * @since 0.0.1
 * @memberof module:typesnitch/utils
 * @param {*} any
 * @return {string}
 */
function getPrototype (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

module.exports = {
  getPrototype
}
