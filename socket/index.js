const Messages = require('../chat/models/Messages');


class SocketHander {
    constructor() {
        this.db;
    }
    connect() {
        console.log("connected mongodb");
        this.db = require('mongoose').connect('mongodb://localhost:27017/chat');
        this.db.Promise = global.Promise;
    }

    getMessages() {
        return Messages.find();
    }

    storeMessages(data) {

        console.log(data);
        const newMessages = new Messages({
            name: data.name,
            msg: data.msg,
            time: moment().valueOf(),
        });

        const doc = newMessages.save();
    }
}

module.exports = SocketHander;