const detect = require('./src/detect')
const { isType, type, unveil, unveilType } = require('./src/core')

const snitch = {
  isType,
  type,
  unveil,
  unveilType,
  detect
}

module.exports = snitch
