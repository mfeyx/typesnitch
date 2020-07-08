function contains ( obj, value ) {
  typeof obj === 'string' || Array.isArray(obj) ? obj.indexOf(value) !== -1 : false
}

module.exports = contains
