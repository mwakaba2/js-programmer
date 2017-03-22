// creating a profiling proxy
function makeProfiler(target) {
  var
    count = {},
    handler = {
      get: function(target, name) {
        if(name in target) {
          count[name] = (count[name] || 0) + 1;
          return target[name];
        }
      }
    };
  return {
    proxy: new Proxy(target, handler),
    count: count
  }
};

var myObject = {
  h: 'Hello',
  w: 'World'
};

// create a myObject proxy
var pObj = makeProfiler(myObject);
console.log(pObj.proxy.h);
console.log(pObj.proxy.h);
console.log(pObj.proxy.w);
console.log(pObj.count.h);
console.log(pObj.count.w);
