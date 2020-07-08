/** Main Functions */
const { isType, type, unveil, unveilType } = require('./src/core')

/** Submodules */
const detect = require('./src/detect')
const convert = require('./src/convert')

/** TypeSnitch API */
module.exports = {
  isType,
  type,
  unveil,
  unveilType,
  detect,
  convert
}
