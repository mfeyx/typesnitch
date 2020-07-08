const isNull = value => value === null
const isUndefined = value => value === undefined
const isString = value => typeof value === 'string'
const isNumber = value => (value === 0 || value === '0') ? true : !Number.isNaN(value / value)
const isInteger = value => typeof value === 'number' && `${value}`.indexOf('.') === -1
const isFloat = value => typeof value === 'number' && `${value}`.indexOf('.') !== -1
const isArray = value => Array.isArray(value)
const isObject = value => typeof value === 'object' && !Array.isArray(value)
const isFunction = value => typeof value === 'function'
const isGenerator = value => typeof value === 'function' && value.constructor.name === 'GeneratorFunction'
const isUint16Array = value => typeof value === 'object' && value.BYTES_PER_ELEMENT === 2
const isUint32Array = value => typeof value === 'object' && value.BYTES_PER_ELEMENT === 4
const isUint8Array = value => typeof value === 'object' && value.constructor.name === 'Uint8Array'
const isUint8ClampedArray = value => typeof value === 'object' && value.constructor.name === 'Uint8ClampedArray'

module.exports = {
  isNull,
  isUndefined,
  isString,
  isNumber,
  isInteger,
  isFloat,
  isArray,
  isObject,
  isFunction,
  isGenerator,
  isUint16Array,
  isUint32Array,
  isUint8Array,
  isUint8ClampedArray
}
