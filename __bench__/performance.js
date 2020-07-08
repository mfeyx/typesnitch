/* eslint-disable */

/**
 * Results:
 * - Use typeof when possible
 * - early return is king
 * - for matching strings use: str.indexOf(other) !== -1
 * - Use global variables, global functions if you can, if you call them multiple times
 */

const { Suite } = require('benchmark')
const suite = new Suite

// function getProtoType (val) {
//   if (val === void 0) return 'Undefined'
//   if (val === null) return 'Null'

//   // typeof is the fastet way
//   if (typeof val === 'string') return 'String'
//   if (typeof val === 'object' && Array.isArray(val)) return 'Array'

//   // other cases
//   return Object.prototype.toString.call(val).slice(8, -1)
// }

// // fastest matching for pure strings
// var proto = Object.prototype.toString

// var stringContainsOther = ( str, other ) => str.indexOf(other) !== -1

// var protoLookUp = obj => types[proto.call(obj)]

// var protoContain = (obj, type) => stringContainsOther(proto.call(obj), type)


// const x = 'hello world'
// suite
//   .add('protoContain', () => protoContain(x, 'string'))
//   .add('protoLookUp', () => protoLookUp(x, 'string'))
//   .on('cycle', event => console.log(String(event.target)) )
//   .on('complete', function () { console.log('Fastest is ' + this.filter('fastest').map('name')) })
//   .run({ 'async': false })

const isFloatNumber = num => `${num}`.indexOf('.') !== -1
const isInteger= num => `${num}`.indexOf('.') === -1
const isIntegerNumber = num => Number.isInteger(num)
const isNumber = val => (val === 0 || val === '0') ? true : !Number.isNaN(val / val)
const convertNumber = val => isNumber(val) ? +val : val


const funcIndexOf = (arr, member) => arr.indexOf(member)
const arrayIncludes= (arr, member) => arr.includes(member)


function toString (value) {
  if (value === void 0) return 'undefined'
  if (value === null) return 'null'
  if (typeof value === 'string') return value
  const type = typeof value
  if (type === 'number') return `${value}`
  if (type === 'boolean') return `${value}`
  return JSON.stringify(value)
}

const arr = ['hello', 'world']
const member = 'a'
suite
  .add('toString', () => toString(member))
  .add('toStringOr', () => toStringOr(member))
  .on('cycle', event => console.log(String(event.target)) )
  .on('complete', function () { console.log('Fastest is ' + this.filter('fastest').map('name')) })
  .run({ 'async': false })
