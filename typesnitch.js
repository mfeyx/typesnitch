/** Main Functions */
const { isType, type, unveil, unveilType } = require('./src/core')

/** Submodules */
const detect = require('./src/detect')
const convert = require('./src/convert')

/** TypeSnitch API */
module.exports = {
  type,
  unveil,
  unveilType,
  isType,
  detect,
  convert
}
