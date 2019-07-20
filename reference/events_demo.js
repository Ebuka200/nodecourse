const EventEMitter = require('events');

//Create class
class MyEmitter extends EventEmitter{}

//init Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));