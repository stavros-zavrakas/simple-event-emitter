var EventEmitter = require('./EventEmitter');

var em = new EventEmitter();

em.on('connect', function () {
  console.log('succesfully connected');
});

em.on('connect', function () {
  console.log('one more succesfully connected');
});

em.on('disconnect', function () {
  console.log('succesfully disconnected');
});

em.emit('connect');
em.emit('disconnect');