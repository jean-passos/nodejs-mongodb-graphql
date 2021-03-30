const mongodb = require('../utils/mongoDatabase');
const ConsumerModel = require('../model/Consumer');

function findConsumer(parent, { email }) {
    try {
        mongodb.openConnection();
        const consumer = ConsumerModel.findOne({ email: email });
        return consumer;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findConsumer
}