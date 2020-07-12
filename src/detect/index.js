const isNull = value => value === null
const isUndefined = value => value === undefined
const isString = value => typeof value === 'string'
const isNumber = value => typeof value === 'number'
const isNaN = value => typeof value === 'number' && Number.isNaN(1 / +value)
const isArray = value => Array.isArray(value)
const isBigInt = value => typeof value === 'bigint'
const isSymbol = value => typeof value === 'symbol'
const isBuffer = value => typeof value === 'object' && value.constructor.name === 'Buffer'
const isDate = value => value instanceof Date
const isError = value => value instanceof Error
const isRegExp = value => value instanceof RegExp
const isBaseObject = value => typeof value === 'object' && value.constructor.name === 'Object'
const isBoolean = value => typeof value === 'boolean'
const isFloat = value => typeof value === 'number' && !Number.isNaN(value) && `${value}`.indexOf('.') !== -1
const isInteger = value => Number.isInteger(value)
const isObject = value => typeof value === 'object'
const isNegInfinity = value => isNumber(value) && !isInteger(value) && !isFloat(value) && !isNaN(value) && value < 0
const isPosInfinity = value => isNumber(value) && !isInteger(value) && !isFloat(value) && !isNaN(value) && value > 0
const isFunction = value => typeof value === 'function'
const isGenerator = value => typeof value === 'function' && value.constructor.name === 'GeneratorFunction'
const isUint16Array = value => typeof value === 'object' && value.BYTES_PER_ELEMENT === 2
const isUint32Array = value => typeof value === 'object' && value.BYTES_PER_ELEMENT === 4
const isBigInt64Array = value => typeof value === 'object' && value.BYTES_PER_ELEMENT === 8
const isUint8Array = value => typeof value === 'object' && value.constructor.name === 'Uint8Array'
const isUint8ClampedArray = value => typeof value === 'object' && value.constructor.name === 'Uint8ClampedArray'

const isNumberLike = value => {
  value = +value
  return value === 0
    ? true
    : typeof value === 'number' && !Number.isNaN(value)
}

module.exports = {
  isArray,
  isBaseObject,
  isBigInt,
  isBigInt64Array,
  isBoolean,
  isBuffer,
  isDate,
  isError,
  isFloat,
  isFunction,
  isGenerator,
  isInteger,
  isNaN,
  isNegInfinity,
  isNull,
  isNumber,
  isNumberLike,
  isObject,
  isPosInfinity,
  isRegExp,
  isString,
  isSymbol,
  isUint16Array,
  isUint32Array,
  isUint8Array,
  isUint8ClampedArray,
  isUndefined
}
