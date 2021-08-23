function foo() {
    var funcs = [];
    for (var i = 0; i < 3; i++) {
      funcs.push(function () {
        console.log("func", i);
      });
    }
    return funcs;
  }
  var xs = foo();
  xs.forEach(x => x());