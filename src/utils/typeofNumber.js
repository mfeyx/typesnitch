const proto = require("./proto")

// types: Integer, Float, NaN, Infinity, -Infinity
module.exports = function typeofNumber(value) {
    const prototype = proto.getPrototype(value)

    if (prototype !== "Number") {
        throw new TypeError("Input must be of type Number.")
    }

    let type
    if (Number.isFinite(value)) {
        if (Number.isInteger(value)) {
            type = "Integer"
        } else {
            type = "Float"
        }
    } else {
        if (Number.isNaN(value)) {
            type = Number.NaN.toString()
        } else {
            type = value > 0 ? Number.POSITIVE_INFINITY.toString() : Number.NEGATIVE_INFINITY.toString()
        }
    }

    return type
}
