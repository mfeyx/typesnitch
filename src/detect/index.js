const isNull = value => value === null
const isUndefined = value => value === undefined

const isBoolean = value => typeof value === 'boolean'
const isString = value => typeof value === 'string'
const isBigInt = value => typeof value === 'bigint'
const isSymbol = value => typeof value === 'symbol'

const isArray = value => Array.isArray(value)

const isDate = value => value instanceof Date
const isError = value => value instanceof Error
const isRegExp = value => value instanceof RegExp

const isNumber = value => typeof value === 'number'
const isNaN = value => isNumber(value) && Number.isNaN(1 / +value)
const isInteger = value => isNumber(value) && Number.isInteger(value)
const isFloat = value => isNumber(value) && !Number.isNaN(value) && `${value}`.indexOf('.') !== -1
const isNegInfinity = value => isNumber(value) && !isInteger(value) && !isFloat(value) && !isNaN(value) && value < 0
const isPosInfinity = value => isNumber(value) && !isInteger(value) && !isFloat(value) && !isNaN(value) && value > 0
const isNumberLike = value => +value === 0 ? true : isNumber(+value) && !Number.isNaN(+value)

const isBaseObject = value => typeof value === 'object'
const isBuffer = value => isBaseObject(value) && value.constructor.name === 'Buffer'
const isObject = value => isBaseObject(value) && value.constructor.name === 'Object'
const isUint16Array = value => isBaseObject(value) && value.BYTES_PER_ELEMENT === 2
const isUint32Array = value => isBaseObject(value) && value.BYTES_PER_ELEMENT === 4
const isBigInt64Array = value => isBaseObject(value) && value.BYTES_PER_ELEMENT === 8
const isUint8Array = value => isBaseObject(value) && value.constructor.name === 'Uint8Array'
const isUint8ClampedArray = value => isBaseObject(value) && value.constructor.name === 'Uint8ClampedArray'

const isFunction = value => typeof value === 'function'
const isGenerator = value => isFunction(value) && value.constructor.name === 'GeneratorFunction'

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
