function EventEmitter(argument) {
  this.events = {};
}

EventEmitter.prototype.on = function (type, listener) {
  var self = this;

  self.events[type] = self.events[type] || [];

  self.events[type].push(listener);
};

EventEmitter.prototype.emit = function (type) {
  var self = this;

  self.events[type] = self.events[type] || [];

  self.events[type].forEach(function (event) {
    event();
  });
};

module.exports = EventEmitter;