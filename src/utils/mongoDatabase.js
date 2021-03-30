const mongoose = require('mongoose');


const openConnection = () => {
    mongoose.connect(`${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true })
    const connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'connection error: '));
    connection.once('open', function () {
       console.log('Connection to MongoDB Opened');
    });
}

module.exports = { openConnection }