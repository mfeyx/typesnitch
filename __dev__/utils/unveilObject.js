const { isType } = require('../../snitch')

function _hasSameLength (str) {
  return str.match(/{/g).length === str.match(/}/g).length
}

function _isObject (str) {
  return str.startsWith('{') && str.endsWith('}')
}

function _isflatObject (str) {
  return str.match(/{/g).length === 1 && str.match(/}/g).length === 1
}

function _isValidObject (str) {
  return _isObject(str) && _isflatObject(str) && _hasSameLength(str)
}

function _generateObjString (str) {
  return str.slice(1, -1).replace(/\s/g, '')
}

function _generateKeyValuePairs (str) {
  return str.split(/(?<=:[\w\d_]),|,(?=[\w\d_]*:)/g)
}

/**
 * Convert an object-string into an object.
 *    Works only with "flat" objects at the moment.
 * @param {string} value
 * @return {*} A converted object or the original string
 * @example
 * const x = '{a: 123, b: 456, 1: "abc"}'
 * const y = unveilObject(x) // { a: 123, b: 456, "1": "abc" }
 */
function unveilObject (value) {
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
      obj[key] = val
    }
    value = obj
  }
  return value
}

module.exports = unveilObject
