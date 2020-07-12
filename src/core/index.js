const { unveilObject } = require('../utils')
const type = require('../core/type')

/**
 * Unveils the actual value for a string input.
 * Works with Strings, Integers, and flat Objects at the moment, or everything that can
 * be parsed by JSON.parse() method, respectively.
 * @param {number|object|string} value Any value to unveil
 * @returns {*} parsed Value
 */
function unveil (value) {
  value = value.trim()
  try {
    return JSON.parse(value)
  } catch (error) {
    return unveilObject(value)
  }
}

/**
 * Check if an object is of a certain type.
 * @param {*} obj Any Object or Value
 * @param {String} typestring – whch type to expect
 * @param {Boolean} detailed – use detailed type sniffing or not
 * @return {Boolean} true or false
 */
function isType (obj, typestring, detailed=true) {
  return type(obj, detailed).toLowerCase().indexOf(typestring.toLowerCase()) !== -1
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
  isType,
  type,
  unveil,
  unveilType
}
