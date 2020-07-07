/* eslint-disable */

/**
 * Results:
 * 1. Use typeof when possible
 * 2. for matching strings use: str.indexOf(other) !== -1
 * 3. Use global variables, global functions if you can, if you call them multiple times
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

// const types = {
//   '[object String]': 'String',
//   '[object lol]': 'lol',
//   '[object rofl]': 'rofl',
//   '[object rof]': 'rofl',
//   '[object ro]': 'rofl',
//   '[object r]': 'rofl',
//   '[object ra]': 'rofl',
//   '[object rad]': 'rofl',
//   '[object radf]': 'rofl',
//   '[object radff]': 'rofl',
//   '[object radffd]': 'rofl',
//   '[object adffd]': 'rofl',
//   '[object dffd]': 'rofl',
//   '[object ffd]': 'rofl',
//   '[object fd]': 'rofl',
// }

// var protoLookUp = obj => types[proto.call(obj)]

// var protoContain = (obj, type) => stringContainsOther(proto.call(obj), type)


// const x = 'hello world'
// suite
//   .add('protoContain', () => protoContain(x, 'string'))
//   .add('protoLookUp', () => protoLookUp(x, 'string'))
//   .on('cycle', event => console.log(String(event.target)) )
//   .on('complete', function () { console.log('Fastest is ' + this.filter('fastest').map('name')) })
//   .run({ 'async': false })

const convertNumbertoString = num => `${num}`

const isFloatNumber = num => `${num}`.indexOf('.') !== -1

const isInteger= num => `${num}`.indexOf('.') === -1

const isIntegerNumber = num => Number.isInteger(num)

const isNumber = val => (val === 0 || val === '0') ? true : !Number.isNaN(val / val)
const convertNumber = val => isNumber(val) ? +val : val

const x = 10.1
suite
  .add('isNumber', () => isNumber(x))
  .add('convertNumber', () => convertNumber(x))
  .on('cycle', event => console.log(String(event.target)) )
  .on('complete', function () { console.log('Fastest is ' + this.filter('fastest').map('name')) })
  .run({ 'async': false })
