const axios = require('axios')
const { replaceModel, spaceModel } = require('../models/requestModel')
const { alignmentCases, api } = require('../def/definition')

module.exports = class FormatClass {
  constructor (params) {
    this.params = params
    this.result = []
    this.resultStr = ''
  }

  async begin () {
    await this.addChucks()
    await this.replacer('replaces')
    await this.replacer('italics')
    await this.replacer('bolds')
    await this.replacer()
    await this.splitString()
    await this.alignText()
  }

  // getting strings from chuck api
  async addChucks () {
    const chuckdata = []
    const promises = this.params.chucks.map(async element => {
      const url = `${api.url}/jokes/search?query=${element}`
      const response = await axios.get(url)
      if (response.data && response.data.result) {
        chuckdata.push(response.data.result)
      }
    })
    await Promise.all(promises)
    chuckdata.map(element => {
      element.map(el => {
        this.params.str += el.value
      })
    })
  }

  // replacing string depends on the case (italic- bold - single/double space - replacing with specific characters)
  async replacer (event) {
    if (event) {
      const replaceModels = Object.keys(replaceModel)
      this.params[event].map(el => {
        if (replaceModels.indexOf(event) > -1) {
          this.params.str = this.params.str.replace(new RegExp(el, 'g'), replaceModel[event] + el + replaceModel[event])
        } else {
          this.params.str = this.params.str.replace(new RegExp(el.replaceFrom, 'g'), el.replaceTo)
        }
      })
    } else {
      this.params.str = this.params.str.replace(new RegExp(' ', 'g'), spaceModel[this.params.spacing])
    }
  }

  async splitString () {
    // splitting strings by newline characters at the begin
    this.strArr = this.params.str.split(/\r?\n/)
    this.strArr.map((str) => {
      // then splitting them lineWidth by LineWidth
      const data = str.match(new RegExp('.{1,' + this.params.lineWidth + '}', 'g'))
      this.result = this.result.concat(data)
    })
  }

  // aligning text with spaces
  async alignText () {
    this.result.map((el, index) => {
      if (el.length < this.params.lineWidth && this.params.textAlignment.toLowerCase() !== alignmentCases.left) {
        const len = this.params.lineWidth - el.length
        const str = ' '.repeat(len)
        const leftStr = str.substring(0, len / 2)
        const rightStr = str.substring(len / 2, len)

        this.params.textAlignment.toLowerCase() === alignmentCases.right
          ? this.result[index] = str + this.result[index]
          : this.result[index] = leftStr + this.result[index] + rightStr
      }
    })
  }

  // turning result array to string with newLine characters
  async getResult () {
    this.result.map(el => {
      this.resultStr = this.resultStr + el + '\n'
    })
    return this.resultStr
  }
}
