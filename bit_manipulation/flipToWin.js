
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

function flipWinSol(n) {
  if(~n === 0) {
    return 53;
  }
  let currLength = 0;
  let prevLength = 0;
  let maxLength = 1;
  while(n != 0) {
    if((n & 1) === 1) {
      currLength++;
    } else if ((n & 1) === 0) {
      prevLength = (n & 2) === 0 ? 0 : currLength;
      currLength = 0;
    }
    maxLength = Math.max(prevLength + currLength + 1, maxLength);
    n >>= 1;
  }
  return maxLength;
}

module.exports = {
  getMax, flipToWin, flipWinSol
}