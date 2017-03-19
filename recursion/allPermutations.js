function findAllPermutations(str, index) {
  let allPermutations = [];
  // first character
  if (index === 0) {
    return [str[index]];
  } else {
    permutations = findAllPermutations(str, index-1);
    console.log(permutations);
    for(let p of permutations){
      for(let idx = 0; idx <= index; idx++) {
        let newStr = p.substr(0, idx) + str[index] + p.substr(idx);
        allPermutations.push(newStr);
      }
    }
  }
  return allPermutations;
}

var example = "abcd";
var len = example.length;
var answer = findAllPermutations(example, len-1);
var answerLen = answer.length;
console.log(`abcd: ${answer}, ${answerLen}`);