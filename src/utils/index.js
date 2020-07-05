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

/**
 * Check if an object is of a certain type.
 * @param {*} obj Any Object or Value
 * @param {String} type
 * @return {Boolean} true or false
 * @example
 * const x = 1
 * isType(x, 'number') // true
 * isType(x, 'string') // false
 */
function isType (obj, type) {
  return getPrototype(obj).toLowerCase().indexOf(type.toLowerCase()) !== -1
}

/**
 * Convert an object-string into an object. Works only with "flat" objects at the moment.
 * @param {string} value
 * @return {*} A converted object or the original string
 * @example
 * const x = '{a: 123, b: 456, 1: "abc"}'
 * const y = unveilObject(x) // { a: 123, b: 456, "1": "abc" }
 */
function unveilObject (value) {

  /** @private */
  function _hasSameLength (str) {
    return str.match(/{/g).length === str.match(/}/g).length
  }
  /** @private */
  function _isObject (str) {
    return str.startsWith('{') && str.endsWith('}')
  }
  /** @private */
  function _isflatObject (str) {
    return str.match(/{/g).length === 1 && str.match(/}/g).length === 1
  }
  /** @private */
  function _isValidObject (str) {
    return _isObject(str) && _isflatObject(str) && _hasSameLength(str)
  }
  /** @private */
  function _generateObjString (str) {
    return str.slice(1, -1).replace(/\s/g, '')
  }
  /** @private */
  function _generateKeyValuePairs (str) {
    return str.split(/(?<=:[\w\d_]),|,(?=[\w\d_]*:)/g)
  }
  /** @private */
  function _safeParse (value) {
    value = value.trim()
    try {
      return JSON.parse(value)
    } catch (error) {
      return value
    }
  }

  value = value.trim()
  // validate the input
  if (isType(value, 'string') && _isValidObject(value)) {
    // remove the curly braces and whitespace
    const objString = _generateObjString(value)
    // split the string into an array with 'key:value' strings
    const keyValuePairs = _generateKeyValuePairs(objString)
    // now generate the real object
    const obj = {}
    for (const pair of keyValuePairs) {
      const [key, val] = pair.split(':')
      obj[key] = _safeParse(val)
    }
    value = obj
  }
  return value
}

// types: Integer, Float, NaN, Infinity, -Infinity
function typeofNumber (value) {
  const prototype = getPrototype(value)
  if (prototype !== 'Number') {
    throw new TypeError('Input must be of type Number.')
  }
  let type
  if (Number.isFinite(value)) {
    if (Number.isInteger(value)) {
      type = 'Integer'
    } else {
      type = 'Float'
    }
  } else {
    if (Number.isNaN(value)) {
      type = Number.NaN.toString()
    } else {
      type = value > 0 ? Number.POSITIVE_INFINITY.toString() : Number.NEGATIVE_INFINITY.toString()
    }
  }
  return type
}

module.exports = {
  getPrototype,
  typeofNumber,
  isType,
  unveilObject
}
