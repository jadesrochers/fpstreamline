const fps = require('../pipeAsync');
const R = require('ramda')

let testprom1, testprom2, testprom3
beforeEach(() => {
  testprom1 = jest.fn(n => Promise.resolve(n-1))
  testprom2 = jest.fn(n => Promise.resolve(n-2))
  testprom3 = jest.fn(n => Promise.resolve(n-3))
})

test('pipeAsync test', async () => {
  await expect(fps.pipeAsync(
     R.adjust(1)(testprom1),
     R.adjust(1)(testprom2),
     R.adjust(1)(testprom3),
  )([0,6])).resolves.toEqual([0,0])
  await expect(fps.pipeAsync(
     testprom1,
     testprom2,
     testprom3,
  )(6)).resolves.toEqual(0)
})

