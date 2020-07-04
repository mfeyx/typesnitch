const {
  type,
  unveil,
  unveilType
} = require('../src/core')

describe('core.type()', () => {
  test('1 to be Integer', () => {
    expect(type(1)).toBe('Integer')
  })
  test('1 and default false to be Number', () => {
    expect(type(1, false)).toBe('Number')
  })
  test('1.1 to be a Float', () => {
    expect(type(1.1)).toBe('Float')
  })
  test('"Hello" to be a String', () => {
    expect(type('Hello')).toBe('String')
  })
  test.todo('other types')
})

describe('core.unveil()', () => {
  test('"[1, 2]" should become [1, 2]', () => {
    expect(unveil('[1, 2]')).toEqual([1, 2])
  })
  test('"1" should become 1', () => {
    expect(unveil('1')).toBe(1)
  })
  test('"1.1" should become 1.1', () => {
    expect(unveil('1.1')).toBe(1.1)
  })
  test.todo('"{a: 1}" to become {a: 1}')
})

describe('core.unveilType()', () => {
  test('"1.1" should become 1.1 and be Type Float', () => {
    expect(unveilType('1.1')).toBe('Float')
  })
  test('"1" should become 1 and be Type Integer', () => {
    expect(unveilType('1')).toBe('Integer')
  })
})
