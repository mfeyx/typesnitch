const utils = require('./utils')

const { typeofNumber, safeParse } = utils
const { getPrototype } = utils.proto

/**
 * Reveals the Prototype of an input value
 * @param {*} value Any value to typeof
 * @param {Boolean} detailed If true detailed Prototype for Numbers will be revealed
 * @returns {String}
 * @example
 * snitch.type(1, true)       // 'Integer'
 * snitch.type(1, false)      // 'Number'
 * snitch.type(1.1)           // 'Float'
 * snitch.type(Number.Nan)    // 'NaN'
 * snitch.type(1/0)           // 'Infinity'
 * snitch.type(-1/0)          // '-Infinity'
 * snitch.type('hello world') // 'String'
 * snitch.type([1, 2, 3])     // 'Array'
 * snitch.type({a: 1, b: 2})  // 'Object'
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
 * @param {*} value Any value to unveil
 * @returns {*} parsed Value
 * @example
 * snitch.unveil('1')           // 1
 * snitch.unveil('[1, 2, 3]')   // [1, 2, 3]
 * snitch.unveil('[, 1, 3]')    // '[, 2, 3]'
 */
function unveil (value) {
  // TODO: Implementation
  // different logics for different types
  // check data integrity
  return safeParse(value)
}

const snitch = {
  type,
  unveil
}

module.exports = snitch
