const User = function (name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },

    recieve: function (message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
};

const Chatroom = function () {
    let users = {};

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },

        send: function (message, from, to) {
            if (to) {
                to.recieve(message, from)
            } else {
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].recieve(message, from)
                    }
                }
            }
        }
    };
}

const clark = new User("Clark");
const bruce = new User("Bruce");
const peter = new User("Peter");

const chatroom = new Chatroom();

chatroom.register(clark);
chatroom.register(bruce);
chatroom.register(peter);

clark.send("Hello Batman", bruce);
bruce.send("Hello Superman", clark);
peter.send("What's up, biatches...")