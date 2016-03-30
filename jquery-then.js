$.fn.then = function () {
  var self = this;
  var mirror = {};
  var deferedMethod = ['animate']
  var scheduled = [];
  var invokeListernerFactory = function (name, defered) {
    return function () {
      scheduled.push({
        name: name,
        args: arguments,
        defered: defered
      })
      return this;
    }
  }
  var exec = function () {
    _tick();
    return self;
  }
  var _tick = function () {
    if (scheduled.length === 0) return;
    var task = scheduled[0];
    scheduled.splice(0, 1);
    if ('function' === typeof task.name) {
      if (!task.interator) {
        task.name.apply(self, [_tick].concat(task.args));
      } else {
        [].slice.call(task.interator.apply(self, task.args), 0).reverse().forEach(function (item) {
          scheduled.unshift({
            name: task.name,
            args: [item].concat(task.args)
          })
        })
        _tick();
      }
      return;
    }
    if (!task.defered) {
      self = self[task.name].apply(self, task.args);
      return _tick(); 
    }
    self = self[task.name].apply(self, task.args);
    self.promise().done(_tick);
  }
  for (var i in self) {
    mirror[i] = invokeListernerFactory(i, false);
  }
  deferedMethod.forEach(function (name) {
    mirror[name] = invokeListernerFactory(name, true);
  })
  mirror.exec = exec;
  mirror.then = function (cb) {
    var args = [].slice.call(arguments, 1)
    scheduled.push({
      name: cb,
      args: args
    });
    return this;
  }
  mirror.thenEach = function (cb, items) {
    var args = [].slice.call(arguments, 2)
    if (Array.isArray(items)) {
      items.forEach(function (item) {
        scheduled.push({
          name: cb,
          args: [item].concat(args)
        });
      })
    } else if ('function' === typeof items) {
        scheduled.push({
          name: cb,
          interator: items,
          args: args
        });
    }
    return this;
  }
  return mirror;
}