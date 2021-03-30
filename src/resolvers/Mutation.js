const mongodb = require('../utils/mongoDatabase');
const ConsumerModel = require('../model/Consumer');
const Purchase = require('../model/Purchase');

function newConsumer(parent, { name, lastName, dob, email }) {

    let consumer = new ConsumerModel({ name, lastName, dob, email });
    try {
        mongodb.openConnection();
        consumer.save();
        return consumer;
    } catch (error) {
        throw error;
    }
}

function newAddress(parent, { userId, name, zipCode, neighborhood, city, state }) {

    try {
        mongodb.openConnection();

        let updated = ConsumerModel.findOneAndUpdate({ _id: userId },
            { address: { name, zipCode, neighborhood, city, state } },
            { new: true, useFindAndModify: false });

        return updated;

    } catch (error) {
        throw error;
    }
}

async function newConsumerPurchase(parent, { userId, productCategory, qtyBoughtItems }) {

    let purchase = new Purchase({ consumer: userId, productCategory, qtyBoughtItems });

    try {
        mongodb.openConnection();
        const savedPurchase = await purchase.save();

        savedPurchase.consumer = await ConsumerModel.findById(userId);
        purchase.consumer.purchases.push(purchase);
        purchase.consumer.save();

        return savedPurchase;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    newConsumer,
    newAddress,
    newConsumerPurchase
}