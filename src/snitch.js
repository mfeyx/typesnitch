const { type, unveil, unveilType } = require("../src/core")
const { safeParse, proto } = require("../src/utils")

// API
const snitch = {
  type,
  unveil,
  unveilType,
  utils: {
    proto,
    safeParse
  }
}

module.exports = snitch
