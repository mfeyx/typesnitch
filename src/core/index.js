const { isType, unveilObject } = require('../utils')
const type = require('../core/type')
// const types = require('./types')

/**
 * Reveals the Prototype of an input value
 * @param {*} value Any value to typeof
 * @param {boolean} detailed If true detailed Prototype for Numbers will be revealed
 * @returns {string}
 */
// function type (value, detailed=true) {
//   let prototype = getPrototype(value)
//   if (detailed && prototype === 'Number') {
//     prototype = typeofNumber(value)
//   }
//   return prototype
// }

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
