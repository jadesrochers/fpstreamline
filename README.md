# fpstreamline
A small library for functional programming; functions I found to be  
missing elsewhere that were useful. Also shortcuts for fcns that do exist.

## Whats the Use?
Whether using ramda or lodash you can get most of what is needed, but there  
were some functions I wanted that were not availble or had awkward syntax.

## installation 
npm install @jadesrochers/fpstreamline  

const fps = require('@jadesrochers/fpstreamline')  
const R = require('ramda')

## Usage

## Piping async functions
Allows async functions to be piped, and also handles regular functions.   
Consider it a regular piping function that is also async tolerant.  
```javascript
let testprom1 = n => Promise.resolve(n-1)
let testprom2 = n => Promise.resolve(n-2)
let testprom3 = n => Promise.resolve(n-3)
let test = async () => {
 let rslt = await fps.pipeAsync(
     R.adjust(1)(testprom1),
     R.adjust(1)(testprom2),
     R.adjust(1)(testprom3),
  )([0,6])
 console.log('Result: ', rslt)
}
test()
// [0,0]
```

## Array manipulation functions
### Append and Prepend automatically convert to array
I wanted to be able to use unknown length/type input, and these do.
They will take single values or an array and app/pre pend either way.
```javascript
R.pipe(
  fps.append(2),
  fps.append(3),
  )(1)
// [ 1, 2, 3 ]

R.pipe(
  fps.prepend(2),
  fps.prepend(3),
  )(1)
// [ 3, 2, 1 ]
```

### Append and Prepend result of fcns on specified input  
Also append/prepend, but takes a function and index, and append/prepend the  
result of running the function on the index.
Can take single value or array, if single value use (0) for index.
```javascript
let testfn1 = n => n+1
let testfn2 = n => n+2

R.pipe(
  fps.appendUseNth(1)(testfn1),
  fps.appendUseNth(2)(testfn2),
  )([0,1,2])
// [ 0, 1, 2, 2, 4 ]

R.pipe(
  fps.prependUseNth(1)(testfn1),
  fps.prependUseNth(2)(testfn2),
  )([0,1,2])
// [ 3, 2, 0, 1, 2 ]
```

### Insert result of fcn on input array member  
```javascript
R.pipe(
  fps.insertUseNth(1)(1)(testfn1),
  fps.insertUseNth(2)(2)(testfn2),
  )([0,1,2])
// [ 0, 2, 3, 1, 2 ]
```

### runN and runAll run function on some or all array members
The arity must be correct, nothing fancy going on here.
```javascript
fps.runAll(a => b => c => d => e => a+b+c+d+e)([0,1,2,3,4])
// 10
fps.runN(3)(a => b => c => a+b+c)([0,1,2,3,4])
// 9
```

## Regex functions
For quickly getting correctly escaped/formatted regular expression string  
when the text to be searched has special characters.

### Escape all special characters and all except periods  
```javascript
fps.regexEscapeAll('-/\\^$*+?.()|[]{}')
fps.regexEscapeExPer('-/\\^$*+?.()|[]{}')
```

### Create regex from text passed  
toRegex uses what you pass verbatim, getRegex escaped all special  
characters except period.  
```javascript
fps.toRegex('i')('abc*(ghi+)?')
//  /abc*(ghi+)?/i
fps.getRegex('abc*+?[]()ghi')
//  /abc\*\+\?\[\]\(\)ghi/i
```

## Conversions and Type testing
These are mostly just wrappers around other functions to  
do testing/converting.  
Supported types include object, number, boolean, string, null, array,  
regexp, function, undefined  

### Check the type of a passed object  
```javascript
fps.isTypeof('object')({})
// true
fps.isTypeof('object')({a:1, b:2})
// true
```

### Check if the types of two objects match  
Will match R.type rules.
```javascript
fps.typeMatch('def')('abc')
// true
fps.typeMatch({})({a:1, b:2})
// true
fps.typeMatch(null)(undefined)
// false
```

### Convert string to JSON
```javascript
fps.toJSON('{"a":1,"b":[1,2,3],"c":3}')
//   { a: 1, b: [ 1, 2, 3 ], c: 3 }
```

### Convert string to number 
Converts to number if it has just numbers.
```javascript
fps.strToNum('4620')
// Converts
fps.strToNum('34-35')
// Keeps as string
fps.strToNum('34,351')
// keeps as string
```

### Convert string to Date
It follows rules of Date() object creation, so anything valid  
for that should work with this.
```javascript
fps.toDate('11-05-1955')
fps.toDate('December 7, 1941')
fps.toDate('1453-05-29')
```

### Convert to array accounting for various scenarios
```javascript
fps.toArray(5)
// [ 5 ]
fps.toArray('test string')
// [ 'test string' ]
fps.toArray({a: 1})
// [ {a: 1} ]
fps.toArray([1,2,3])
// [ 1, 2, 3 ]
```

## Math functions
These are implemented everywhere of course, I just wanted the option
of dividing by the value passed first without R.flip. Not very useful.

```javascript
R.pipe(
  fps.subtract(3),
  fps.divide(3),
)(12)
// 3
```
