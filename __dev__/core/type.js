/* eslint-disable */
var types = {
  '[object Object]': 'Object',
  '[object Array]': 'Array',
  '[object String]': 'String',
  '[object Boolean]': 'Boolean',
  '[object Number]': 'Number',
  '[object Undefined]': 'Undefined',
  '[object RegExp]': 'RegExp',
  '[object Null]': 'Null',
  '[object Uint16Array]': 'Uint16Array',
  '[object Uint32Array]': 'Uint32Array',
  '[object ArrayBuffer]': 'ArrayBuffer',
  '[object Function]': 'Function',
  '[object Date]': 'Date',
  '[object Arguments]': 'Arguments',
  '[object Error]': 'Error',
  '[object GeneratorFunction]': 'GeneratorFunction',
  '[object Symbol]': 'Symbol',
  '[object Map]': 'Map',
  '[object WeakMap]': 'WeakMap',
  '[object Set]': 'Set',
  '[object Int8Array]': 'Int8Array',
  '[object Int16Array]': 'Int16Array',
  '[object Int32Array]': 'Int32Array',
  '[object WeakSet]': 'WeakSet',
  '[object BigInt]': 'BigInt',
  '[object Float32Array]': 'Float32Array',
  '[object Float64Array]': 'Float64Array',
  '[object Uint8ClampedArray]': 'Uint8ClampedArray'
}

var proto = Object.prototype.toString

function _getConstructorString (obj) {
  return obj.constructor.toString()
}

function getNumberType (value) {
  let type
  if (Number.isFinite(value)) {
    if (Number.isInteger(value)) {
      type = 'Integer'
    } else {
      type = 'Float'
    }
  } else {
    if (Number.isNaN(value)) {
      type = Number.NaN.toString()
    } else {
      type = value > 0
        ? Number.POSITIVE_INFINITY.toString()
        : Number.NEGATIVE_INFINITY.toString()
    }
  }
  return type
}

function getPrototype (value) {

  var type = proto.call(value)
  switch (true) {
    case type.includes('Uint8Array'):
      _getConstructorString(value).includes('Buffer') ? 'Buffer' : 'Uint8Array'
    default:
      break
  }

  if (type === '[object Uint8Array]') {
    return _getConstructorString(value).includes('Buffer')
      ? 'Buffer'
      : 'Uint8Array'
  }



  return types[type]
}

const x = getPrototype('string')
console.log(x)
