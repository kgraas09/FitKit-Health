const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/fitkithealth';
const supplements = require('../models/Supplemental');
const preworkouts = require('../models/Preworkout');
const postworkouts = require('../models/Postworkout');
const { default: Supplemental } = require('../models/supplement');

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const getSupplementals = {
  getAllSupplements: (callback) => {
    supplementals.find((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
};

const getPreworkouts = {
  getAllPreworkouts: (callback) => {
    preworkouts.find((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
};

const getPostworkouts = {
  getAllPostworkouts: (callback) => {
    postworkouts.find((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
};

module.exports = {
  getSupplementals,
  getPreworkouts,
  getPostworkouts
};