const Benchmark = require('benchmark')
const snitch = require('typesnitch')
const kindof = require('kind-of')

const suite = new Benchmark.Suite

// add tests
suite
  .add('kindof >= str', () => kindof('Hello World') )
  .add('kindof >= array', () => kindof([1, 2, 3]) )
  .add('snitch >= str', () => snitch.type('Hello World') )
  .add('snitch >= array', () => snitch.type([1, 2, 3]) )
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ 'async': true })
