const snitch = require('../src/snitch')

describe('Testing Snitch API', () => {
  test('snitch should be an object', () => {
    expect(typeof snitch).toEqual(typeof {})
  })
  test('snitch should have type method', () => {
    expect(snitch.type).toBeDefined()
    expect(snitch.type).not.toBeNull()
  })
  test('snitch.type should be a Function', () => {
    expect(typeof snitch.type).toEqual(typeof Function)
  })
  test('snitch should have unveil method', () => {
    expect(snitch.unveil).toBeDefined()
    expect(snitch.unveil).not.toBeNull()
  })
  test('snitch.unveil should be a Function', () => {
    expect(typeof snitch.unveil).toEqual(typeof Function)
  })
})

describe('snitch.type()', () => {
  test('1 to be Integer', () => {
    expect(snitch.type(1)).toBe('Integer')
  })
  test('1 and default false to be Number', () => {
    expect(snitch.type(1, false)).toBe('Number')
  })
  test('1.1 to be a Float', () => {
    expect(snitch.type(1.1)).toBe('Float')
  })
  test('"Hello" to be a String', () => {
    expect(snitch.type('Hello')).toBe('String')
  })
  test.todo('other types')
})

describe('snitch.isType()', () => {
  test('1 is type of "number"', () => {
    expect(snitch.isType(1, 'number')).toBeTruthy()
    expect(snitch.isType(1, 'array')).toBeFalsy()
    expect(snitch.isType(1, 'object')).toBeFalsy()
    expect(snitch.isType(1, 'function')).toBeFalsy()
    expect(snitch.isType(1, 'null')).toBeFalsy()
    expect(snitch.isType(1, 'undefined')).toBeFalsy()
    expect(snitch.isType(1, 'string')).toBeFalsy()
  })
  test('"hello" is type of "string"', () => {
    expect(snitch.isType('hello', 'string')).toBeTruthy()
    expect(snitch.isType('hello', 'array')).toBeFalsy()
    expect(snitch.isType('hello', 'object')).toBeFalsy()
    expect(snitch.isType('hello', 'function')).toBeFalsy()
    expect(snitch.isType('hello', 'null')).toBeFalsy()
    expect(snitch.isType('hello', 'undefined')).toBeFalsy()
    expect(snitch.isType('hello', 'number')).toBeFalsy()
  })
  test('undefined is type of "Undefined"', () => {
    expect(snitch.isType(undefined, 'undefined')).toBeTruthy()
    expect(snitch.isType(undefined, 'null')).toBeFalsy()
  })
  test.todo('other types')
})

describe('snitch.unveil()', () => {
  test('"[1, 2]" should become [1, 2]', () => {
    expect(snitch.unveil('[1, 2]')).toEqual([1, 2])
  })
  test('"1" should become 1', () => {
    expect(snitch.unveil('1')).toBe(1)
  })
  test('"1.1" should become 1.1', () => {
    expect(snitch.unveil('1.1')).toBe(1.1)
  })
  test('"{a: 1}" to become {a: 1}', () => {
    console.log(snitch.unveil('{a: 1}'))
    expect(snitch.unveil('{ a: 1 }')).toEqual({ a: 1 })
  })
})

describe('snitch.unveilType()', () => {
  test('"1.1" should become 1.1 and be Type Float', () => {
    expect(snitch.unveilType('1.1')).toBe('Float')
  })
  test('"1" should become 1 and be Type Integer', () => {
    expect(snitch.unveilType('1')).toBe('Integer')
  })
})
