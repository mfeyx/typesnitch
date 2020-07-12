/**
 * Returns the raw prototype of an input value.
 * @since 0.0.1
 * @memberof module:typesnitch/utils
 * @param {*} any
 * @return {string}
 */
function getPrototype (obj) {

  /** @private */
  function _getConstructorString (obj) {
    return obj.constructor.toString()
  }
  /** @private */
  function _getPrototypeString (obj) {
    return Object.prototype.toString.call(obj)
  }

  const type = _getPrototypeString(obj)
  if (type === '[object Uint8Array]') {
    return _getConstructorString(obj).includes('Buffer')
      ? 'Buffer'
      : 'Uint8Array'
  } else {
    return {
      '[object Object]': 'Object',
      '[object Array]': 'Array',
      '[object String]': 'String',
      '[object Boolean]': 'Boolean',
      '[object Number]': 'Number',
      '[object Undefined]': 'Undefined',
      '[object RegExp]': 'RegExp',
      '[object Null]': 'Null',
      '[object Uint16Array]': 'Uint16Array',
      '[object Uint32Array]': 'Uint32Array',
      '[object ArrayBuffer]': 'ArrayBuffer',
      '[object Function]': 'Function',
      '[object Date]': 'Date',
      '[object Arguments]': 'Arguments',
      '[object Error]': 'Error',
      '[object GeneratorFunction]': 'GeneratorFunction',
      '[object Symbol]': 'Symbol',
      '[object Map]': 'Map',
      '[object WeakMap]': 'WeakMap',
      '[object Set]': 'Set',
      '[object Int8Array]': 'Int8Array',
      '[object Int16Array]': 'Int16Array',
      '[object Int32Array]': 'Int32Array',
      '[object WeakSet]': 'WeakSet',
      '[object BigInt]': 'BigInt',
      '[object Float32Array]': 'Float32Array',
      '[object Float64Array]': 'Float64Array',
      '[object Uint8ClampedArray]': 'Uint8ClampedArray'
    }[type]
  }
}

/**
 * Check if an object is of a certain type.
 * @param {*} obj Any Object or Value
 * @param {String} type
 * @return {Boolean} true or false
 */
function isType (obj, type) {
  return getPrototype(obj).toLowerCase().indexOf(type.toLowerCase()) !== -1
}

/**
 * Convert an object-string into an object. Works only with "flat" objects at the moment.
 * @param {string} value
 * @return {*} A converted object or the original string
 */
function unveilObject (value) {

  /** @private */
  function _isString (value) {
    return typeof value === 'string'
  }
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
    return (
      _isObject(str)
      && _isflatObject(str)
      && _hasSameLength(str)
    )
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
  if (_isString(value) && _isValidObject(value)) {
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

/** @private */
function typeofNumber (value) {
  // types: Integer, Float, NaN, Infinity, -Infinity
  if (typeof value !== 'number') {
    throw new TypeError('Input must be of type Number.')
  }

  if (Number.isFinite(value)) {
    if (Number.isInteger(value)) {
      return 'Integer'
    } else {
      return 'Float'
    }
  } else {
    if (Number.isNaN(value)) {
      return 'NaN'
    } else {
      return value > 0 ? 'Infinity' : '-Infinity'
    }
  }
}

module.exports = {
  getPrototype,
  typeofNumber,
  isType,
  unveilObject
}
