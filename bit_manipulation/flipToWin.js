
function getMax(list) {
  return list.reduce((acc, val) => {
    if(acc < val.length) {
      acc = val.length;
    }
    return acc;
  }, 0);
}

function flipToWin(n){
  let max = 1;
  let bin = n.toString(2);
  let idx = 0;
  if(!bin.includes('0')) {
    return bin.length;
  }

  while(idx < bin.length - 1) {
    if(bin[idx] === '0' && bin[idx+1] !== '0') {
      let mask = 1 << (bin.length - 1 - idx);
      // WARNING Be careful with coercion, make sure you are 'OR'ing same type of numbers
      let curr = (n | mask).toString(2);
      curr = curr.substr(curr.length - bin.length);
      let currMax = getMax(curr.split('0'));
      if(currMax > max) {
        max = currMax;
      }
    }
    idx += 1;
  }
  return max;
}

// // testing if all zeroes
// console.log(flipToWin(0));
// // // test with couple zeroes
// console.log(flipToWin(5));
// // // test with all ones
// console.log(flipToWin(15));
// // test with larger example
// console.log(flipToWin(1775));

module.exports = {
  getMax, flipToWin
}