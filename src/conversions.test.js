const fps = require('./conversions');

test('isTypeof test', () => {
  expect(fps.isTypeof('object')({})).toBe(true)
  expect(fps.isTypeof('object')({a:1, b:2})).toBe(true)
  expect(fps.isTypeof('number')(1)).toBe(true)
  expect(fps.isTypeof('boolean')(false)).toBe(true)
  expect(fps.isTypeof('string')('')).toBe(true)
  expect(fps.isTypeof('string')('str')).toBe(true)
  expect(fps.isTypeof('null')(null)).toBe(true)
  expect(fps.isTypeof('array')([])).toBe(true)
  expect(fps.isTypeof('array')([1,2,3])).toBe(true)
  expect(fps.isTypeof('regexp')(/regexp/)).toBe(true)
  expect(fps.isTypeof('function')(() => {})).toBe(true)
  expect(fps.isTypeof('undefined')(undefined)).toBe(true)
})

test('typeMatch test', () => {
  expect(fps.typeMatch('def')('abc')).toBe(true)
  expect(fps.typeMatch('')('   ')).toBe(true)
  expect(fps.typeMatch({})({a:1, b:2})).toBe(true)
  expect(fps.typeMatch([])([1,2,3])).toBe(true)
  expect(fps.typeMatch(null)(undefined)).toBe(false)
  expect(fps.typeMatch(false)(0)).toBe(false)
})

test('toJSON test', () => {
  expect(fps.toJSON('{"a":1,"b":2,"c":3}')).toEqual({a:1, b:2, c:3})
  expect(fps.toJSON('{"a":1,"b":[1,2,3],"c":3}')).toEqual({a:1, b:[1,2,3], c:3})
  expect(fps.toJSON('{"a":1,"b":2,"c":{"d":4,"e":5}}')).toEqual({a:1, b:2, c:{d:4, e:5}})
})

test('strToNum test', () => {
  expect(fps.strToNum('def')).toBe('def')
  expect(fps.strToNum('4925')).toBe(4925)
  expect(fps.strToNum('4734')).toBe(4734)
  expect(fps.strToNum('4620')).toBe(4620)
  expect(fps.strToNum('34-35')).toBe('34-35')
})

test('toDate test', () => {
  expect(fps.toDate('11-05-1955')).toEqual(new Date('11-05-1955'))
  expect(fps.toDate('December 7, 1941')).toEqual(new Date('December 7, 1941'))
  expect(fps.toDate('1453-05-29')).toEqual(new Date('1453-05-29'))
  expect(fps.toDate('07/28/1914')).toEqual(new Date('07/28/1914'))
  expect(fps.toDate('2018')).toEqual(new Date('2018'))
})

test('toArray test', () => {
  expect(fps.toArray(5)).toEqual([5])
  expect(fps.toArray('test string')).toEqual(['test string'])
  expect(fps.toArray({a: 1})).toEqual([{a:1}])
  expect(fps.toArray([1,2,3])).toEqual([1,2,3])
})


