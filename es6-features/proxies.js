var target = {
  a: 1,
  b: 2,
  c: 3
};

var handler = {
  get: function(target, name) {
    return (
      name in target ? target[name] : 42
    );
  },
  set: function(target, prop, value) {
    if (prop.length === 1 && prop >= 'a' && prop <= 'z') {
      target[prop] = value;
      return true;
    } else {
      throw new ReferenceError(prop + ' cannot be set');
      return false;
    }
  }

};

var proxy = new Proxy(target, handler);

// get examples
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.c);
console.log(proxy.meaningOfLife);

//set examples
proxy.a = 10;
proxy.b = 20;
proxy.AB = 123;
