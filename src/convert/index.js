/* eslint-disable */
const { isNumber, isArray, isObject, isString } = require('../detect')

function toString (value) {
  if (value === void 0) return 'undefined'
  if (value === null) return 'null'
  if (typeof value === 'string') return value
  const type = typeof value
  if (type === 'number') return `${value}`
  if (type === 'boolean') return `${value}`
  return JSON.stringify(value)
}

const toNumber = value => isNumber(value) ? +value : value

function toArray (value, options) {
  options = { delimiter:',', objectKeys:false,...options }
  if (isArray(value)) return value
  if (isString(value)) return value.split(options.delimiter)
  if (isObject(value)) return options.objectKeys ? Object.keys(value) : Object.values(value)
  return [value]
}

function toObject (value) {
  if (isObject(value)) return value
  const obj = {}
  if (isString(value) || isNumber(value)) return { 0: value }
  if (isArray(value)) {
    value.map((e, i) => obj[i] = e)
    return obj
  }
  return obj
}

module.exports = {
  toString,
  toNumber,
  toArray,
  toObject
}
