/* eslint-disable */
const { isNumber, arrayIncludes } = require('./detect')

// const vars = [
//   1,
//   'hello',
//   false,
//   null,
//   undefined,
//   [1, 2, 3],
//   {a: 1, b: 2}
// ]

function toString (value) {
  if (value === void 0) return 'undefined'
  if (value === null) return 'null'
  if (typeof value === 'string') return value
  const type = typeof value
  if (type === 'number') return `${value}`
  if (type === 'boolean') return `${value}`
  return JSON.stringify(value)
}

const convertNumber = val => isNumber(val) ? +val : val

module.exports = {
  toString,
  convertNumber
}
