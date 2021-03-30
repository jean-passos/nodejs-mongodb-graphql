const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseModel = new Schema({
    productCategory: String,
    qtyBoughtItems: Number,
    consumer: {
        type: Schema.Types.ObjectId,
        ref: 'Consumer'
    }
});

module.exports = mongoose.model('Purchase', purchaseModel);
