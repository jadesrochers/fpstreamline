import * as R from 'ramda' 

const divide = R.curry((denom,numerate) => (numerate / denom));
const subtract = R.curry((minus,input) => (input - minus))

/* exports.divide = divide */
/* exports.subtract = subtract */

export { divide, subtract }
