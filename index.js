const arr = require('./src/arrayfcn')
const conv = require('./src/conversions')
const log = require('./src/logging')
const math = require('./src/math')
const pipe = require('./src/pipeAsync')
const string = require('./src/strings')

let combine
combine = {...combine,...arr}
combine = {...combine,...conv}
combine = {...combine,...log}
combine = {...combine,...math}
combine = {...combine,...pipe}
combine = {...combine,...string}
module.exports = combine 
