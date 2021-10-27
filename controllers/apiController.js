const FormatClass = require('../models/formatterModel')
const format = async (req, res, next) => {
  const formatter = new FormatClass(req.body)
  await formatter.begin()
  const result = await formatter.getResult()
  res.send(result)
}
module.exports = { format }
