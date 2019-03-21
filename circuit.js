const five = require("johnny-five");
const EventEmitter = require('events').EventEmitter;

// Create emitter object to receive commands from the server
const emitter = new EventEmitter();

// Create board instance
const board = new five.Board();

// board.on
board.on("ready", () => {
    // Connection message in the console
    console.log('ARDUINO BOARD READY STATE: TRUE');

    let led = new five.Led(13);

    emitter.on('action', (action) => {
        switch (action) {
            case "Activate":
                console.log("On");
                led.on();
                break;
            case "Deactivate":
                console.log("Off");
                led.off();
                break;
            default:
                console.log("toggle");
                led.toggle();
                break;
        }
    });
});

module.exports = emitter;