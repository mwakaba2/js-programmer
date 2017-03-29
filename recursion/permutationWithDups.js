function buildFreqTable(str) {
  let table = {};
  for(let char of str) {
    table[char] = table[char] ? table[char] + 1 : 1;
  }
  return table;
}

function permute(test) {
  let permutations = [];
  let freqTable = buildFreqTable(test);
  permute2(freqTable, '', test.length, permutations);
  console.log(permutations);
}

function permute1(curr, rest) {
  if(rest.length === 0) {
    if(!permutations.has(curr)) {
      permutations.add(curr);
    }
    return;
  }
  for (let i = 0; i < rest.length; i ++) {
    let next = rest.substr(0, i) + rest.substr(i+1);
    permute(curr + rest[i], next);
  }
}

function permute2(table, prefix, remaining, result) {
  if(remaining === 0){
    result.push(prefix);
    return;
  }
  for(let key of Object.keys(table)) {
    let count = table[key];
    if(count > 0) {
      table[key] = count - 1;
      permute2(table, prefix + key, remaining-1, result);
      table[key] = count;
    }
  }
}

// tests
// 1. unique string
// 2. string with dups
// 3. empty string
let tests = ['cat', 'caa', ''];

for(let test of tests) {
  permute(test);
}
