/**  each participant is just a module that wants to talk to other modules
(other participants)
*/
// let {log} = console;
// const Participant = (name) => {
//   this.name = name;
//   this.chatroom = null;
// };

// /**
//  * ach participant has method for talking, and also listening to
//  * to other participants
//  */

// Participant.prototype = {
//   send: function(message, this, to) {
//     this.chatroom.send(message, this, to)
//   },
//   receive: function(message, from){
//     log()
//   }
// }

// const renderMessage = () => {
//   var log = ""

//   return {
//     add: (msg) => {log += msg + "\n"} ,
//     show: () =>
//   }
// }
var Participant = function (name) {
  this.name = name;
  this.chatroom = null;
};
// each participant has method for talking, and also listening to other participants
Participant.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    log.add(from.name + " to " + this.name + ": " + message);
  },
};
// chatroom is the Mediator: it is the hub where participants send messages to, and receive messages
// from;
var Chatroom = function () {
  var participants = {};
  return {
    register: function (participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },
    send: function (message, from) {
      for (key in participants) {
        if (participants[key] !== from) {
          //you can't message yourself !
          participants[key].receive(message, from);
        }
      }
    },
  };
};
// log helper
var log = (function () {
  var log = "";
  return {
    add: function (msg) {
      log += msg + "\n";
    },
    show: function () {
      alert(log);
      log = "";
    },
  };
})();
function run() {
  var yoko = new Participant("Yoko");
  var john = new Participant("John");
  var paul = new Participant("Paul");
  var ringo = new Participant("Ringo");
  var chatroom = new Chatroom();
  chatroom.register(yoko);
  chatroom.register(john);
  chatroom.register(paul);
  chatroom.register(ringo);
  yoko.send("All you need is love.");
  yoko.send("I love you John.");
  paul.send("Ha, I heard that!");
  log.show();
}
run()
