function unveilObject (value) {

  value = value.trim().slice(1, -1).split(',').map(el => el.trim())
  console.log(value)

  const obj = {}
  for (let val of value) {
    console.log(val)
    val = val.replace(/\:/s, '$')
    console.log(val)
  }
  // value.forEach(el => {
  //   const [k, v] = el.replace(/:/, '$').split('$')
  //   obj[k] = safeParse(v)
  // })

  return obj
}

module.exports = unveilObject
