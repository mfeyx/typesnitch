const type = require('../src/core/type')


describe('snitch.type()', () => {
  test('Undefined', () => {
    expect(type(undefined)).toBe('Undefined')
  })
  test('Null', () => {
    expect(type(null)).toBe('Null')
  })
  test('String', () => {
    expect(type('hello world')).toBe('String')
  })
  test('Boolean', () => {
    expect(type(false)).toBe('Boolean')
    expect(type(true)).toBe('Boolean')
  })
  test('Date', () => {
    const d = new Date()
    expect(type(d)).toBe('Date')
  })
  test('RegExp', () => {
    const re = new RegExp('pattern', 'gm')
    expect(type(re)).toBe('RegExp')
  })
  test('Array', () => {
    expect(type([1, 2, 3])).toBe('Array')
  })
  test('Positive Infinity', () => {
    const x = 1 / 0
    expect(type(x)).toBe('Infinity')
  })
  test('Negative Infinity', () => {
    const x = -1 / 0
    expect(type(x)).toBe('-Infinity')
  })
  test('Number (Integer)', () => {
    expect(type(1, false)).toBe('Number')
  })
  test('Integer', () => {
    expect(type(1)).toBe('Integer')
  })
  test('Number (Float)', () => {
    expect(type(1.1, false)).toBe('Number')
  })
  test('Float', () => {
    expect(type(1.1)).toBe('Float')
  })
  test('NaN', () => {
    expect(type(Number.NaN)).toBe('NaN')
  })
  test('Number (BigInt)', () => {
    expect(type(1.1, false)).toBe('Number')
  })
  test('BigInt', () => {
    expect(type(BigInt(12345678912345))).toBe('BigInt')
  })
  test('Symbol', () => {
    const s = Symbol()
    expect(type(s)).toBe('Symbol')
  })
  test('BigInt64Array', () => {
    expect(type(new BigInt64Array())).toBe('BigInt64Array')
  })
  test('Function', () => {
    const fn = () => 'hello world'
    expect(type(fn)).toBe('Function')
    expect(type(fn)).not.toBe('GeneratorFunction')
  })
  test('Generator Function', () => {
    function* generator (i) {
      yield i
    }
    expect(type(generator)).toBe('GeneratorFunction')
    expect(type(generator)).not.toBe('Function')
  })
  test('Uint16Array', () => {
    const obj = new Uint16Array('')
    expect(type(obj)).toBe('Uint16Array')
  })
  test('Uint32Array', () => {
    const obj = new Uint32Array('')
    expect(type(obj)).toBe('Uint32Array')
  })
  test('Buffer', () => {
    const obj = new Buffer.from('abc')
    expect(type(obj)).toBe('Buffer')
  })
  test('Map', () => {
    const obj = new Map()
    expect(type(obj)).toBe('Map')
  })
})
