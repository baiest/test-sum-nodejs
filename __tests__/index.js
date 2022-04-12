const sum = require('../index')

describe('Test Sum works!', () => {
  test('3 + 4', () => expect(sum(3, 4)).toBe(7))
  test('5 - 6', () => expect(sum(5, -6)).toBe(-1))
})