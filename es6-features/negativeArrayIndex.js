function negativeIndex(arr) {
  var handler = {
    set: function(proxy, index, value) {
      index = parseInt(index);
      return index < 0 ? (arr[arr.length + index] = value) : arr[index] = value;
    },
    get: function(proxy, index) {
      index = parseInt(index);
      return index < 0 ? arr[arr.length + index] : arr[index];
    }
  };
  return new Proxy(arr, handler);
}

var example = ['apples', 'bananas', 'pomelo'];
console.log(negativeIndex(example)[-1]);