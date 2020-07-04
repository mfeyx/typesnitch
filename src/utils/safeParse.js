module.exports = function safeParse(value) {
  try {
    return JSON.parse(value.trim())
  } catch (error) {
    return value
  }
}
