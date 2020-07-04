const { getPrototype } = require('./proto')
const { DIGITS } = require('./constants')

/**
 * Checks if an object is an integer
 * @since 0.0.1
 * @memberof module:typesnitch/detect
 * @param {object} obj
 * @return {boolean} true or false
 */
function isInteger(obj) {
  return getPrototype(obj) === 'Number' && !obj.toString().includes('.')
}

/**
 * Checks if an object is like an integer
 * @since 0.0.1
 * @memberof module:typesnitch/detect
 * @param {string} str
 * @return {boolean} true or false
 */
function isIntegerLike(str) {
  if (getPrototype(str) !== 'String') return false
  const obj = str
    .split('')
    .filter(c => DIGITS.includes(c))
    .join('')
  return obj.length === str.length
}

/**
 * Checks if an object is a string
 * @since 0.0.1
 * @memberof module:typesnitch/detect
 * @param {object} obj
 * @return {boolean} true or false
 */
function isString(obj) {
  return getPrototype(obj) === 'String'
}

/**
 * Checks if an object is a Float
 * @since 0.0.1
 * @memberof module:typesnitch/detect
 * @param {object} obj
 * @return {boolean} true or false
 */
function isFloat(obj) {
  return getPrototype(obj) === 'Number' && obj.toString().includes('.')
}

/**
 * Checks if an object is an object
 * @since 0.0.1
 * @memberof module:typesnitch/detect
 * @param {object} obj
 * @return {boolean} true or false
 */
function isObject(obj) {
  return getPrototype(obj) === 'object'
}

/**
 * Checks if an object is Undefined
 * @since 0.0.1
 * @memberof module:typesnitch/detect
 * @param {object} obj
 * @return {boolean} true or false
 */
function isUndefined(obj) {
  return getPrototype(obj) === 'Undefined'
}

/**
 * Checks if an object is Null
 * @since 0.0.1
 * @memberof module:typesnitch/detect
 * @param {object} obj
 * @return {boolean} true or false
 */
function isNull(obj) {
  return getPrototype(obj) === 'Null'
}

/**
 * Checks if an object is an Array
 * @since 0.0.1
 * @memberof module:typesnitch/detect
 * @param {object} obj
 * @return {boolean} true or false
 */
function isArray(obj) {
  return getPrototype(obj) === 'Array'
}

/**
 * Checks if an object is like an Array (stringified array)
 * @since 0.0.1
 * @memberof module:typesnitch/detect
 * @param {object} obj
 * @return {boolean} true or false
 */
function isArrayLike(obj) {
  obj = obj.toString().trim()
  return obj.startsWith('[') && obj.endsWith(']')
}

// helper functions
const getRowLength = row => (isArray(row) ? row.length : isUndefined(row) ? 0 : 1)
const baseIsMatrix = matrix => Array.from(new Set(matrix.map(getRowLength))).length === 1

/**
 * Checks if an object is a 2D-Array (n x m)
 * @since 0.0.1
 * @memberof module:typesnitch/detect
 * @param {array} matrix - 2D-Array
 * @returns {boolean}
 */
function isMatrix(matrix) {
  return isArray(matrix) && baseIsMatrix(matrix)
}

module.exports = {
  isArray,
  isArrayLike,
  isFloat,
  isInteger,
  isIntegerLike,
  isMatrix,
  isNull,
  isObject,
  isString,
  isUndefined
}
