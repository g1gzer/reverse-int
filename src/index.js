module.exports = function reverse (n) {
   let temp = Math.abs(n) + '';
  return temp.split('').reverse().join('') / "1";
}

