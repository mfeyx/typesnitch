const detect = require('../detect')

/**
 * Reveals the Prototype of an input value
 * @param {*} value Any value to typeof
 * @param {boolean} detailed If true detailed Prototype for Numbers will be revealed
 * @returns {string}
 */
function type (obj, detailed=true) {
  if (obj === undefined) return 'Undefined'
  if (obj === null) return 'Null'

  const t = typeof obj

  // common types first
  if (t === 'string') return 'String'
  if (t === 'boolean') return 'Boolean'
  if (Array.isArray(obj)) return 'Array'

  // not so common
  if (obj instanceof Date) return 'Date'
  if (obj instanceof RegExp) return 'RegExp'
  if (obj instanceof Error) return 'Error'
  if (t === 'symbol') return 'Symbol'
  if (t === 'bigint') return 'BigInt'

  switch (true) {
    case detailed:
      if (detect.isFloat(obj)) return 'Float'
      if (detect.isInteger(obj)) return 'Integer'
      if (detect.isNaN(obj)) return 'NaN'
      if (detect.isPosInfinity(obj)) return 'Infinity'
      if (detect.isNegInfinity(obj)) return '-Infinity'
      if (detect.isBuffer(obj)) return 'Buffer'
      if (detect.isGenerator(obj)) return 'GeneratorFunction'
      if (detect.isFunction(obj)) return 'Function'
      if (detect.isUint16Array(obj)) return 'Uint16Array'
      if (detect.isUint32Array(obj)) return 'Uint32Array'
      if (detect.isUint8Array(obj)) return 'Uint8Array'
      if (detect.isUint8ClampedArray(obj)) return 'Uint8ClampedArray'
      if (detect.isBigInt64Array(obj)) return 'BigInt64Array'
      if (detect.isObject(obj)) return 'Object'
      break
    default:
      if (t === 'object') return 'Object'
      if (t === 'number') return 'Number'
      if (t === 'function') return 'Function'
      break
  }
  // 🎵if nothing else matches 🎵
  return Object.prototype.toString.call(obj).slice(8, -1)
}

module.exports = type
