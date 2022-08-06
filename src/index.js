module.exports = function check(str, bracketsConfig) {

  let baseStr = str.length;
  let newStr = '';

  while (newStr !== baseStr) {
    baseStr = str.length;
    bracketsConfig.forEach(pairs => {pairs = pairs.join('')
      while(str.indexOf(pairs) >= 0) {
      str = str.replace(pairs, '');
      }
  });

    newStr = str.length;
  }
  
  return newStr == 0 ? true : false;
}
