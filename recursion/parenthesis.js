// n = 3
var combo = [];
var n = 3;
var patt = '';
pair(combo, n, n, '', 0);
console.log(combo);

function pair(list, left, right, str, index) {
  if(left < 0 || right < left) {
    return;
  }
  if(left === 0 && right === 0) {
    list.push(str.slice());
  } else {
    var newStr = str.substr(0, index) + '(' + str.substr(index);
    pair(list, left-1, right, newStr, index + 1);
    newStr = str.substr(0, index) + ')' + str.substr(index);
    pair(list, left, right-1, newStr, index + 1);
  }
}