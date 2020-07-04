const snitch = require('../src/snitch')

describe('Testing Snitch API', () => {
  test('snitch should be an object', () => {
    expect(typeof snitch).toEqual(typeof {})
  })
})
