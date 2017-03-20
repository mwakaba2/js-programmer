
function multiply(a, b){
  // null values
  if(a >= 0 && b >= 0){
    let mem = [];
    let smaller = a > b ? b : a;
    let bigger = a > b ? a : b;
    return recursiveMultiply(smaller, bigger, mem);
  }
  return -1;
}

function recursiveMultiply(smaller, bigger, mem) {
  if (smaller === 0) {
    return 0;
  } else if (smaller === 1) {
    return bigger;
  } else if(mem[smaller] > 0) {
    return mem[smaller];
  }
  let left = smaller >> 1;
  let right = smaller - left;
  mem[smaller] = recursiveMultiply(left, bigger, mem) + recursiveMultiply(right, bigger, mem);
  return mem[smaller];
}

console.log(multiply(2, -1));
console.log(multiply(2, 0));
console.log(multiply(2, undefined));
console.log(multiply(2, 7));
console.log(multiply(2, 8));

function multiplyNoMem(smaller, bigger) {
  if (smaller === 0) {
    return 0;
  } else if (smaller === 1) {
    return bigger;
  }
  let s = smaller >> 1;
  let halfProduct = multiplyNoMem(s, bigger);
  if(smaller % 2 == 0){
    return halfProduct + halfProduct;
  } else {
    return halfProduct + halfProduct + bigger;
  }
}

console.log(multiplyNoMem(2, 7));
console.log(multiplyNoMem(2, 8));
