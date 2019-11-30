import * as R from 'ramda' 

const concat = R.curry((addon,existing) => (existing.concat(addon)))

const strSearchBool = R.curry((regex, str) => (str.search(regex) > -1 ))

const strRemoveSpecial = str => str.replace(/[-\/\\^$*+?.()|[\]{}]/g,'')

const regexEscapeAll = str => str.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&')

const regexEscapeExPer = str => str.replace(/[-\/\\^$*+?()|[\]{}]/g,'\\$&')

const toRegex = R.curry((flags,str) => (new RegExp(str, flags)))

const getRegex = R.pipe(
  regexEscapeExPer,
  toRegex('i'),
)

const getSearch = R.pipe(
  strRemoveSpecial,
  R.toLower,
  R.replace(/ /g,''),
)

/* exports.concat = concat */
/* exports.strSearchBool = strSearchBool */
/* exports.strRemoveSpecial = strRemoveSpecial */
/* exports.regexEscapeAll = regexEscapeAll */
/* exports.regexEscapeExPer = regexEscapeExPer */
/* exports.toRegex = toRegex */
/* exports.getRegex = getRegex */
/* exports.getSearch = getSearch */

export { concat, strSearchBool, strRemoveSpecial, regexEscapeAll, regexEscapeExPer, toRegex, getRegex, getSearch }

