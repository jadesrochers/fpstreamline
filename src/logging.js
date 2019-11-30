import * as R from 'ramda' 

const consoleLog = statement => console.log(statement)
const consoleWarn = statement => console.warn(statement)
const consoleErr = statement => console.error(statement)

const trace = R.curry((label,value) => {
  console.log(`${ label }: ${ value }`);
  return value;
});

const tracePretty = R.curry((label,value) => {
  var visualize = JSON.stringify(value, null, 2)
  console.log(`${ label }: ${ visualize }`);
  return value;
});

const errorIf = R.curry((testfcn,input) => { 
  if(testfcn(input)){
    throw new Error("Input contained error value: " + JSON.stringify(input))
  }else{
    return input
  }
})

/* exports.trace = trace */
/* exports.tracePretty = tracePretty */
/* exports.consoleLog = consoleLog */
/* exports.consoleWarn = consoleWarn */
/* exports.consoleErr = consoleErr */
/* exports.errorIf = errorIf */

export { trace, tracePretty, consoleLog, consoleWarn, consoleErr, errorIf }
