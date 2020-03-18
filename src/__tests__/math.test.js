const fps = require('../math')

test('minus test', () => {
  expect(fps.subtract(3)(10)).toBe(7)
})

test('divide test', () => {
  expect(fps.divide(3)(9)).toBe(3)
})


