const proto = require("./proto");

// types: Integer, Float, NaN, Infinity, -Infinity
function typeofString(value) {
  const prototype = proto.getPrototype(value);

  if (prototype !== "String") {
    throw new TypeError("Input must be of type String.");
  }
  return value.length === 1 ? "Char" : prototype;
}

module.exports = typeofString;
