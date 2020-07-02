const utils = require('../utils')
const { typeofNumber, safeParse } = utils
const { getPrototype } = utils.proto

/**
 * Reveals the Prototype of an input value
 * @param {*} value Any value to typeof
 * @param {boolean} detailed If true detailed Prototype for Numbers will be revealed
 * @returns {string}
 */
function type (value, detailed=true) {
  let prototype = getPrototype(value)
  if (detailed && prototype === 'Number') {
    prototype = typeofNumber(value)
  }
  return prototype
}

/**
 * Unveils the actual value for an string input.
 * Works with Integers and Arrays at the moment.
 * @param {number|number[]|string[]} value Any value to unveil
 * @returns {*} parsed Value
 */
function unveil (value) {
  return safeParse(value)
}

/**
 * Reveals the type of an unveiled value.
 * Works with Integers and Arrays at the moment.
 * @param {*} value Any value to unveil
 * @returns {string}
 */
function unveilType (value) {
  return type(unveil(value))
}

module.exports = {
  type,
  unveil,
  unveilType
}