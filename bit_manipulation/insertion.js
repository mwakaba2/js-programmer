function insertBits(N, M, i, j) {
  N = parseInt(N, 2);
  M = parseInt(M, 2);
  // clears bits i through j for N;
  let allOnes = ~0;
  let leftMask = allOnes << (j-1);
  let rightMask = (1 << i) - 1;
  let fullMask = leftMask | rightMask;
  let nCleared = N & fullMask;
  // shift M to the right position
  let mShifted = M << i;
  return (nCleared | mShifted);
}


console.log(insertBits('10000000000', '10011', 2, 6));