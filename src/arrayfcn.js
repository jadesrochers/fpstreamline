import * as R from 'ramda' 

// Accumulate values
const flatArr = n => {
  let rslt
  if(Array.isArray(n)){
    rslt = [].concat.apply([],n) 
  }else{
    rslt = [n]
  }
  return rslt
}

// Unlike Ramda or lodash, these will transform input to array
const append = R.curry((arg1,arg2) => {
  var argarr = flatArr(arg2)
  var rslt = [].concat.apply([], [argarr, arg1])
  return rslt
})

const prepend = R.curry((arg1,arg2) => {
  var argarr = flatArr(arg2)
  var rslt = [].concat.apply([], [arg1, argarr])
  return rslt
})

// Append using function call with arg
const appendUseNth = R.curry((n,fn,args) => {
  var argarr = flatArr(args)
  var rslt = fn(argarr[n])
  rslt = [].concat(argarr, rslt)
  return flatArr(rslt)
})

const prependUseNth = R.curry((n,fn,args) => {
  var argarr = flatArr(args)
  var rslt = fn(argarr[n])
  rslt = [].concat(rslt, argarr)
  return flatArr(rslt)
})

const insertUseNth = R.curry((n,ins,fn,args) => {
  var argarr = flatArr(args)
  var rslt = fn(argarr[n])
  rslt = R.insert(ins, rslt, argarr)
  return flatArr(rslt)
})

// Call function will all accumulated args
const runAll = R.curry((fn,argarr) => argarr.reduce((partFn, curr) => partFn(curr), fn))

// Calls function with correct arity with # args specified from end of arr. 
const runN = R.curry((n,fn,argarr) => {
  let args = argarr.slice(argarr.length - n)
  let rslt = args.reduce((partFn, curr) => {
    return partFn(curr)
  },fn)
  return rslt
})

// Act on arrays in a function Pipe
/* exports.append = append */
/* exports.prepend = prepend */
/* exports.appendUseNth = appendUseNth */
/* exports.prependUseNth = prependUseNth */
/* exports.insertUseNth = insertUseNth */
/* exports.runAll = runAll */
/* exports.runN = runN */
export { append, prepend, appendUseNth, prependUseNth, insertUseNth, runAll, runN }
