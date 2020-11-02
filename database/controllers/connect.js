const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/fitkithealth';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

