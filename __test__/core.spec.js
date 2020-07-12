const type = require('../src/core/type')

describe('type() function', () => {
  test('snitch should be an object', () => {
    expect(type(1, true)).toEqual('Integer')
    expect(type(1, false)).toEqual('Number')
    expect(type(1.1, true)).toEqual('Float')
    expect(type(1.1, false)).toEqual('Number')
  })
})
