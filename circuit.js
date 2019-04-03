const config = require('config');

const five = require("johnny-five");
const EventEmitter = require('events').EventEmitter;

let board;

if (config.get('board') == 'raspberry') {
    const Raspi = require('raspi-io').RaspiIO;
    // Create board instance
    board = new five.Board({
        io: new Raspi()
    });
} else {
    // Create board instance
    board = new five.Board();
}

// Create emitter object to receive commands from the server
const emitter = new EventEmitter();

// board.on
board.on("ready", () => {
    // Connection message in the console
    console.log('ARDUINO BOARD READY STATE: TRUE');

    let led;

    if (config.get('board') == 'rasberry') {
        led = new five.Led("P1-7");
    } else {
        led = new five.Led(13);
    }

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