const mongoose = require('mongoose');

const connectDB = (uri) => {
    console.log(uri); // Log the URI for debugging
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }); 
};

module.exports = connectDB;
