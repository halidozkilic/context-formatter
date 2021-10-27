module.exports.params1 = {
  str: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lacus eu purus malesuada sodales. Nunc a risus nunc.\nPraesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula varius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. Aliquam dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum arcu est eget turpis. Etiam tortor erat, lacinia et faucibus vitae, maximus et elit.\nDonec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur efficitur sem sed ligula eleifend varius. Mauris et risus quis libero mattis auctor id ut orci.\nAliquam cursus sapien et euismod vestibulum. In maximus dolor eu vulputate tempus. Aenean ultricies nisl id elit mattis, vitae finibus libero interdum. Vestibulum ornare quam nec ornare fermentum.',
  lineWidth: 80,
  textAlignment: 'right',
  spacing: 'single',
  bolds: ['Aliquam', 'Mauris'],
  italics: ['elit'],
  replaces: [{ replaceFrom: 'cursus', replaceTo: 'CURSUS' }, { replaceFrom: 'lacinia', replaceTo: 'malesuada nunc' }],
  chucks: ['tortor', 'fames']
}
module.exports.result1 = {
  str: 'Lorem ipsum dolor sit amet, consectetur adipiscing _elit_. Morbi sit amet lacus \n' +
      '                                  eu purus malesuada sodales. Nunc a risus nunc.\n' +
      'Praesent eget volutpat eros. Fusce mollis gravida nunc, vitae accumsan ligula va\n' +
      'rius vitae. Duis in tellus non est pulvinar efficitur quis ac tortor. **Aliquam*\n' +
      '* dictum, magna quis venenatis pharetra, leo sapien mollis mauris, et vestibulum\n' +
      ' arcu est eget turpis. Etiam tortor erat, malesuada nunc et faucibus vitae, maxi\n' +
      '                                                                  mus et _elit_.\n' +
      'Donec nisl nisi, imperdiet vitae felis ut, maximus condimentum ante. Curabitur e\n' +
      'fficitur sem sed ligula eleifend varius. **Mauris** et risus quis libero mattis \n' +
      '                                                              auctor id ut orci.\n' +
      '**Aliquam** CURSUS sapien et euismod vestibulum. In maximus dolor eu vulputate t\n' +
      'empus. Aenean ultricies nisl id _elit_ mattis, vitae finibus libero interdum. Ve\n' +
      '                                      stibulum ornare quam nec ornare fermentum.\n'
}

module.exports.addChuck = {
  str: 'trying \n white',
  lineWidth: 44,
  textAlignment: 'right',
  spacing: 'single',
  bolds: ['Aliquam', 'Mauris'],
  italics: ['elit'],
  replaces: [{ replaceFrom: 'cursus', replaceTo: 'CURSUS' }, { replaceFrom: 'lacinia', replaceTo: 'malesuada nunc' }],
  chucks: ['maraschino']
}
module.exports.addChuckResult = {
  str: 'trying \n' +
      ' whiteChuck Norris\' idea of a lucious banana slpit consists of a 5 ft cedar log slpit in half lined with 3 five gallon buckets of pure crushed horseradish on top and covered with rusty thumbtacks, crude oil, stagnant swamp mud and topped off with chilled yak whipcream and red maraschino habanero peppers.'
}
module.exports.replacers = {
  str: 'trying \n white idea pure peppers.',
  lineWidth: 44,
  textAlignment: 'right',
  spacing: 'double',
  bolds: ['idea', 'peppers'],
  italics: ['peppers'],
  replaces: [{ replaceFrom: 'white', replaceTo: 'yelloW' }],
  chucks: ['maraschino']
}
module.exports.replacerResult = {
  str: 'trying  \n' +
      '  yelloW  **idea**  pure  _**peppers**_.'
}
module.exports.splitTest = {
  str: '1234512345123\n12345',
  lineWidth: 5
}
module.exports.splitResult = {
  result: ['12345', '12345', '123', '12345']
}
module.exports.alignTest = {
  strArr: ['abcdefgh', 'abcdefgh', 'abc', 'abcdefgh'],
  lineWidth: 8,
  textAlignment: 'center'
}
module.exports.alignResult = {
  result: ['abcdefgh', 'abcdefgh', '  abc   ', 'abcdefgh']
}
module.exports.getResult = {
  resultStr: 'abcdefgh\n' +
      'abcdefgh\n' + '  abc   \n' + 'abcdefgh\n'
}
