# Type Snitch: A Simple Type Sniffer for JS

Have you ever wondered why `typeof []` returns `'object'`? I did, and that is why I started the development of `typesnitch`. Now the `snitch.type([])` will return `'Array'` – isn't that something? Basically, all standard JS prototypes are supported and returned as a `string` value. Furthermore, the `Number` prototype is more differentiated (see examples below).

If you find any bugs or have suggestions feel free to help and fork the package.

## Methods

At the moment `typesnitch` has two main methods:
- type: Returns the prototype of the value.
- unveal: Tries to convert the value, or 'unveal' it, e.g., numbers in disguise :)

You can use `type()` to get the `prototype` of a given input value. The method has a second parameter that can be used to get a more detailed prototype. The `detailed` parameter is set to `true` per default.


With `unveil()` a type conversion will be tried. At the moment it only works with integers and flat arrays that include number or string values. This will, hopefully, change in the future.

## How To Use

### Basic Usage

```js
const snitch = require('typesnitch')

// revealing the prototype of the input
const x = '[1, 2, 3]'
snitch.type(x) // 'String'

// trying to convert the input with unveil
const y = snitch.unveil(x)
snitch.type(y) // 'Array'
```

### More Examples

```js
snitch.type(1, true)       // 'Integer'
snitch.type(1, false)      // 'Number'
snitch.type(1.1)           // 'Float'
snitch.type(Number.Nan)    // 'NaN'
snitch.type(1/'a')         // 'NaN'
snitch.type(1/'a', false)  // 'Number'
snitch.type(1/0)           // 'Infinity'
snitch.type(-1/0)          // '-Infinity'
snitch.type('hello world') // 'String'
snitch.type([1, 2, 3])     // 'Array'
snitch.type({a: 1, b: 2})  // 'Object'
...
```