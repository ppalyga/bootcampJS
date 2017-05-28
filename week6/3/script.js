import Database from './database.js';
import EventEmitter from './eventEmitter.js';

// Użycie EventEmittera
var ev = new EventEmitter();

ev.on("hello", function (message) {
    console.log("Witaj " + message + "!");
});

ev.on("hello", function (message) {
    console.log("Siema " + message + ".");
});

ev.on("goodbye", function () {
    console.log("Do widzenia!");
});

ev.emit("hello", "Marek");
ev.emit("goodbye");
ev.emit("custom"); // nic się nie wydarzy

// DO ZROBIENIA!
// Docelowe użycie klasy Database
var db = new Database("db://localhost:3000"); // fikcyjny adres

db.on("connect", function (url) {
    console.log("Połączenie z bazą pod adresem " + url + " zostało ustanowione.");
});

db.on("disconnect", function (url) {
    console.log("Połączenie z bazą pod adresem " + url + " zostało zakończone.");
});

db.connect();

// po 5 sekundach rozłączamy się
setTimeout(function () {
    db.disconnect();
}, 5000);