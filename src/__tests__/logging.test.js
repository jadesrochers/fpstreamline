const R = require('ramda')
const fps = require('../logging');

beforeAll(() => {
  console.log = jest.fn()
  console.warn = jest.fn()
  console.error = jest.fn()
})

test('errorIf test', () => {
  expect(() => fps.errorIf(R.isNil)(undefined)).toThrow()
  expect(() => fps.errorIf(R.isEmpty)([])).toThrow()
  expect(() => fps.errorIf(R.isEmpty)({})).toThrow()
  expect(() => fps.errorIf(R.isEmpty,'')).toThrow()
  expect(fps.errorIf(R.isEmpty)([1,2])).toEqual([1,2])
})

test('consoleLog test', () => {
  fps.consoleLog(' ')
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenLastCalledWith(' ')
})

test('consoleWarn test', () => {
  fps.consoleWarn(' ')
  expect(console.warn).toHaveBeenCalledTimes(1)
  expect(console.warn).toHaveBeenLastCalledWith(' ')
})

test('consoleErr test', () => {
  fps.consoleErr(' ')
  expect(console.error).toHaveBeenCalledTimes(1)
  expect(console.error).toHaveBeenLastCalledWith(' ')
})

test('trace and tracePretty tests', () => {
  R.pipe(
    fps.trace(' '),
    fps.tracePretty(' '),
  )(' ')
  expect(console.log).toHaveBeenCalledTimes(3)
})


