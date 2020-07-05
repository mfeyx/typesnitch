const timeit = require('timeit-js')
const benchmark = require('benchmark')

const { type } = require('./src/snitch')
const kindof = require('kind-of')

const x = false
const options = { e: 10000000, r: 10, d: 10 }

timeit(kindof, x, options)
console.log('\n')

timeit(type, x, options)
console.log('\n')

const suite = new benchmark.Suite
suite
  .add('snitch => str', () => type(x) )
  .add('kindof => str', () => kindof(x))
  .on('cycle', function (event) { console.log(String(event.target)) })
  .on('complete', function () { console.log('Fastest is ' + this.filter('fastest').map('name')) })
  .run({ 'async': false })
