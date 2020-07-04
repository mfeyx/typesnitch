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
