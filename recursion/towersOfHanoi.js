
class Tower {
  constructor(index) {
    let _index = index;
    let _stack = [];
    this.getIndex = function() {
      return _index;
    }
    this.getStack = function() {
      return _stack;
    }
    this.add = function(disk) {
      let diskNum = _stack.length;
      if(diskNum !== 0 && _stack[diskNum-1] <= disk) {
        throw Error(`Error placing disk ${disk}`);
      } else {
        _stack.push(disk);
      }
    }
    this.moveTopTo = function(destTower) {
      let top = _stack.pop();
      destTower.add(top);
    }
    this.moveDisks = function(n, destination, buffer) {
      if(n > 0) {
        this.moveDisks(n-1, buffer, destination);
        this.moveTopTo(destination);
        buffer.moveDisks(n-1, destination, this);
      }
    }
  }
}

let disks = 10;
let towers = [];
let numOfTowers = 3;
for(let i = 0; i < numOfTowers; i++){
  towers[i] = new Tower(i);
}
for(let i = disks-1; i >= 0; i--) {
  towers[0].add(i);
}
towers[0].moveDisks(disks, towers[2], towers[1]);
console.log(towers[0].getStack());
console.log(towers[1].getStack());
console.log(towers[2].getStack());