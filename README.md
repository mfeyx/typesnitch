# Type Snitch: A Simple Type Sniffer for JS

Have you ever wondered why `typeof []` returns `'object'` ? I did, and that is why I started the development of `typesnitch` . Now `snitch.type([])` will return `'Array'` – isn't that something? Basically, all standard JS prototypes are supported and returned as a `string` value. Furthermore, the `Number` prototype is more differentiated (see examples below).

If you find any bugs or have suggestions feel free to help and fork the package.


# Methods & Modules

## Methods

* `type` : Returns the prototype of the value
* `unveil` : Tries to convert the value, or 'unveil' it, e.g., numbers in disguise :-)
* `unveilType` : combination of `type` and `unveil`
* `isType`: Check if a value has a specific type

Have a look at the tests for more usage information.

You can use `type()` to get the `prototype` of a given input value. The method has a second parameter that can be used to get a more detailed prototype. The `detailed` parameter is set to `true` per default.

With `unveil()` a type conversion will be tried. At the moment it only works with integers, strings, objects and flat arrays that include number or string values. This will, hopefully, change in the future.

### Basic Usage

``` js
const snitch = require('typesnitch')

// revealing the prototype of the input
const x = '[1, 2, 3]'
snitch.type(x) // 'String'

// trying to convert the input with unveil
const y = snitch.unveil(x)
snitch.type(y) // 'Array'
```

#### Handling Objects
Using `unveil()` at `objects` is tricky, and will improve in the future. Here is what you can do at the moment:
```js
const z = '{a: 1, 1: "b"}'
snitch.unveil(z) // { a: 1, "1": "b" }

// you can do this
snitch.unveil('{a: 1, 1: "b", c: [1, 2, 3]}')
// returns: { '1': 'b', a: 1, c: [ 1, 2, 3 ] }

// but, you can't do this at the moment
snitch.unveil('{a: 1, 1: "b", c: [1, 2, 3], d: {e: 1, f: 2}}')
// returns: '{a: 1, 1: "b", c: [1, 2, 3], d: {e: 1, f: 2}'
```

#### Type Checking

You can use `typesnitch` for type checking like so:

```js
const { type, unveil, unveilType, isType } = require('typesnitch')

const x = [1, 2, 3]
const y = '[1,2,3]'

type(x) === type(y)
// false

type(x) === type(unveil(y))
// true

// or use the combination
type(x) === unveilType(y)
// true

const z = "hello, world"
isType(z, 'string')
// true
```

### More Examples

``` js
snitch.type(1, true) // 'Integer'
snitch.type(1, false) // 'Number'
snitch.type(1.1) // 'Float'
snitch.type(Number.Nan) // 'NaN'
snitch.type(1 / 'a') // 'NaN'
snitch.type(1 / 'a', false) // 'Number'
snitch.type(1 / 0) // 'Infinity'
snitch.type(-1 / 0) // '-Infinity'
snitch.type('hello world') // 'String'
snitch.type([1, 2, 3]) // 'Array'
snitch.type({ a: 1, b: 2 }) // 'Object'
...
```

## Modules

- `convert` : Convert data to `strings`, `numbers`, `arrays`, or `objects`

```js
snitch.convert.toString(1)
// '1'

snitch.convert.toNumber('1')
// 1

snitch.convert.toArray('hello; world', { delimiter: ';' })
// ['hello', 'world']

const x = { a: 1, b: 2 }
snitch.convert.toArray(x, { objectKeys: false })
 // [1, 2]

snitch.convert.toArray(x, { objectKeys: true })
// ['a', 'b']

snitch.convert.toObject(['a', 'b'])
// {'0': 'a', '1': 'b'}
```

- `detect` : Helper functions for single type detection

```js
snitch.detect.isString('1')  // true
snitch.detect.isNumber(1)    // true
snitch.detect.isInteger(1)   // true
snitch.detect.isInteger(1.1) // false
snitch.detect.isFloat(1.1)   // true
snitch.detect.isFloat(1)     // false
...
```
