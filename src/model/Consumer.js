const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consumerModel = new Schema({
    name: String,
    lastName: String,
    dob: Date,
    email: String,
    address: {
        name: String,
        zipCode: String,
        neighborhood: String,
        city: String,
        state: String
    },
    purchases: [{ type: Schema.Types.ObjectId, ref: 'Purchase' }]
});

module.exports = mongoose.model('Consumer', consumerModel);