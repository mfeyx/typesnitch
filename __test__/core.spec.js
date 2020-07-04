const {
  type,
  // unveil,
  // unveilType
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
  test.todo('other types')
})
describe('Todo', () => {
  test.todo('core.unveil()')
  test.todo('core.unveilType()')
})
