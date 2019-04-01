const R = require('ramda')
const {strSearchBool} = require('./strings')

const isTypeof = R.curry((type,input) => (R.toLower(R.type(input)) === R.toLower(type)))

const typeMatch = R.curry((inputA,inputB) => {
 return R.type(inputA) === R.type(inputB)
})

const toJSON = input => JSON.parse(input)

const strToNum = input => {
  if((typeof(input) === "string") && strSearchBool(/^[0-9\.]+$/)(input)){
    return (Number(input))
  }
  return input; 
}

const toDate = input => {
  return (new Date(input))
}

const toArray = input => {
  return Array.isArray(input) ? input : Array.of(input)
}

exports.isTypeof = isTypeof
exports.typeMatch = typeMatch
exports.toJSON = toJSON
exports.strToNum = strToNum
exports.toDate = toDate
exports.toArray = toArray


