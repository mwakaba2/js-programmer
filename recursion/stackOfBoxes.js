class Box {
  constructor(width, height, depth) {
    let _width = width;
    let _height = height;
    let _depth = depth;
    this.getWidth = function () {
      return _width;
    }
    this.getHeight = function () {
      return _height;
    }
    this.getDepth = function () {
      return _depth;
    }
    this.canBeAbove = function(box) {
      return (
        _width < box.getWidth() && _height < box.getHeight() && _depth < box.getDepth()
      );
    }
  }
}

function createStack(boxes) {
  // sort in descending order
  boxes.sort((boxA, boxB) => {
    return boxB.getHeight() - boxA.getHeight();
  });
  let maxHeight = 0;
  let stackMap = new Array(boxes.length).fill(0);
  // boxes.forEach((val, idx) => {
  //   let height = createStack1(boxes, idx, stackMap);
  //   maxHeight = Math.max(maxHeight, height);
  // });
  maxHeight = createStack2(boxes, null, 0, stackMap);
  return maxHeight;
}

function createStack1(boxes, bottomIndex, stackMap) {
  if(bottomIndex < boxes.length && stackMap[bottomIndex] > 0) {
    return stackMap[bottomIndex];
  }
  let bottom = boxes[bottomIndex];
  let maxHeight = 0;
  for(let idx = bottomIndex + 1; idx < boxes.length; idx++) {
    if(boxes[idx].canBeAbove(bottom)) {
      let height = createStack1(boxes, idx, stackMap);
      maxHeight = Math.max(maxHeight, height);
    }
  }
  maxHeight += bottom.getHeight();
  stackMap[bottomIndex] = maxHeight;
  return maxHeight;
}

function createStack2(boxes, bottom, offSet, stackMap) {
  if(offSet >= boxes.length) return 0;

  let newBottom = boxes[offSet];
  let heightWithBottom = 0;
  if( bottom === null || newBottom.canBeAbove(bottom)) {
    stackMap[offSet] = createStack2(boxes, newBottom, offSet+1, stackMap);
    stackMap[offSet] += newBottom.getHeight();
  }
  heightWithBottom = stackMap[offSet];

  let heightWithoutBottom = createStack2(boxes, bottom, offSet+1, stackMap);
  return Math.max(heightWithBottom, heightWithoutBottom);
}
// TESTS
// no boxes returns 0
let test1 = [];
// one box maxHeight = 1
let test2 = [new Box(1, 1, 1)];
// valid stack of two boxes maxHeight = 9
let test3 = [
  new Box(5, 3, 2),
  new Box(4, 6, 2),
  new Box(3, 6, 4),
  new Box(6, 6, 6)
];
// maxHeight = 7
let test4 = [
  new Box(1, 7, 5),
  new Box(2, 7, 6),
  new Box(3, 7, 7),
  new Box(4, 7, 8)
];
// all boxes maxHeight = 9
let test5 = [
  new Box(1, 2, 5),
  new Box(2, 3, 6),
  new Box(3, 4, 7)
];

let testCases = [ test1, test2, test3, test4, test5 ];
for(test of testCases) {
  console.log(createStack(test));
}
