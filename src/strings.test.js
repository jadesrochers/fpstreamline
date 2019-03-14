const fps = require('./strings');

test('strSearchBool test', () => {
  expect(fps.strSearchBool(/abc/)('filler abc filler')).toBe(true)
  expect(fps.strSearchBool(/abc/i)('filler ABC filler')).toBe(true)
  expect(fps.strSearchBool(/^abc/)('abc filler')).toBe(true)
  expect(fps.strSearchBool(/abc$/)('filler abc')).toBe(true)
  expect(fps.strSearchBool(/abc/)('filler Abc filler')).toBe(false)
})

test('concat test', () => {
  expect(fps.concat('def')('abc')).toBe('abcdef')
  expect(fps.concat('DEF')('ABC')).toBe('ABCDEF')
  expect(fps.concat([3,4])([1,2])).toEqual([1,2,3,4])
})

test('regexEscapeAll test', () => {
  expect(fps.regexEscapeAll('-/\\^$*+?.()|[]{}')).toBe('\\-\\/\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\[\\]\\{\\}')
})

test('regexEscapeExPer test', () => {
  expect(fps.regexEscapeExPer('-/\\^$*+?.()|[]{}')).toBe('\\-\\/\\\\\\^\\$\\*\\+\\?.\\(\\)\\|\\[\\]\\{\\}')
})

test('toRegex test', () => {
  expect(fps.toRegex('i')('abc')).toEqual(/abc/i)
})

test('getRegex test', () => {
  expect(fps.getRegex('def*+?[]()ghi')).toEqual(/def\*\+\?\[\]\(\)ghi/i)
})

test('getSearch test', () => {
  expect(fps.getSearch('def *+?[]() ghi')).toEqual('defghi')
})


