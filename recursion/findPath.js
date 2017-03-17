'use strict';

const ROW = 5;
const COLUMN = 5;
let board = createBoard(ROW, COLUMN);
board[0][1] = 1;
let path = [];
let visited = new Set();

function createBoard(row, col) {
  return Array(col).fill(0).map(() => Array(row).fill(0));
}

function findPath(row, col) {
  if (row < 0 || col < 0 || board[col][row]) {
    return false;
  }
  if(visited.has(`${row},${col}`)) {
    return false;
  }

  const goal = row === 0 && col === 0;
  if(goal || findPath(row, col - 1) || findPath(row - 1, col)) {
    path.unshift(`${row},${col}`);
    return true;
  }

  visited.add(`${row},${col}`);
  return false;
}


findPath(ROW-1, COLUMN-1);
console.log(path);