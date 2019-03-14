const fps = require('./arrayfcn');
const R = require('ramda')

let testfn1, testfn2, testfn3
let testarr
beforeEach(() => {
  testfn1 = jest.fn(n => n+1)
  testfn2 = jest.fn(n => n+2)
  testfn3 = jest.fn(n => n+3)
  testarr = [0,1,2,3]
})

let testapp, testpre
beforeEach(() => {
  testapp = R.pipe(
    fps.append(testfn1(0)),
    fps.append(testfn2(0)),
    fps.append(testfn3(0)),
  )
  testpre = R.pipe(
    fps.prepend(testfn1(0)),
    fps.prepend(testfn2(0)),
    fps.prepend(testfn3(0)),
  )
})

test('prepend test', () => {
  expect(testpre(0)).toEqual([3,2,1,0])
  expect(testpre([0])).toEqual([3,2,1,0])
  expect(testpre([[0],1])).toEqual([3,2,1,0,1])
})

test('append test', () => {
  expect(testapp(0)).toEqual([0,1,2,3])
  expect(testapp([0])).toEqual([0,1,2,3])
  expect(testapp([[0],1])).toEqual([0,1,1,2,3])
})

test('appendUseNth test', () => {
   expect(R.pipe(
     fps.appendUseNth(1)(testfn1),
     fps.appendUseNth(2)(testfn2),
     fps.appendUseNth(3)(testfn3),
  )(testarr)).toEqual([0,1,2,3,2,4,6])
  expect(R.pipe(
     fps.appendUseNth(0)(testfn1),
     fps.appendUseNth(0)(testfn2),
     fps.appendUseNth(0)(testfn3),
  )(2)).toEqual([2,3,4,5])
})

test('prependUseNth test', () => {
   expect(R.pipe(
     fps.prependUseNth(1)(testfn1),
     fps.prependUseNth(3)(testfn2),
     fps.prependUseNth(5)(testfn3),
  )(testarr)).toEqual([6,4,2,0,1,2,3])
  expect(R.pipe(
     fps.prependUseNth(0)(testfn1),
     fps.prependUseNth(1)(testfn2),
     fps.prependUseNth(2)(testfn3),
  )(2)).toEqual([5,4,3,2])

})

test('InsertUseNth test', () => {
   expect(R.pipe(
     fps.insertUseNth(1)(1)(testfn1),
     fps.insertUseNth(2)(2)(testfn2),
     fps.insertUseNth(3)(3)(testfn3),
  )(testarr)).toEqual([0,2,3,4,1,2,3])
  expect(R.pipe(
     fps.insertUseNth(0)(1)(testfn1),
     fps.insertUseNth(0)(1)(testfn2),
     fps.insertUseNth(0)(1)(testfn3),
  )([[2]])).toEqual([2,5,4,3])

})

test('runAll test', () => {
  expect(fps.runAll(a => b => c => d => e => a+b+c+d+e)([0,1,2,3,4])).toBe(10)
  expect(fps.runAll(a => b => c => a+b+c)([0,-1,-2])).toBe(-3)
  expect(fps.runAll(a => b => a+b)([0,1])).toBe(1)
  expect(fps.runAll(a => b => a-b)([0,1])).toBe(-1)
})

test('runN test', () => {
  expect(fps.runN(3)(a => b => c => a+b+c)([0,1,2,3,4])).toBe(9)
  expect(fps.runN(2)(a => b => a+b)([0,1,2,3,4])).toBe(7)
  expect(fps.runN(4)(a => b => c => d => a+b+c+d)([0,1,2,3,4])).toBe(10)
  expect(fps.runN(2)(a => b => a-b)([0,1,2,3,4])).toBe(-1)
})


