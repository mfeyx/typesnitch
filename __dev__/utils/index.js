const proto = require('./proto')
const constants = require('./constants')
const detect = require('../core/detect')
const typeofNumber = require('./typeofNumber')
const unveilObject = require('./unveilObject')
const safeParse = require('./safeParse')

module.exports = {
  constants,
  detect,
  proto,
  safeParse,
  typeofNumber,
  unveilObject
}
