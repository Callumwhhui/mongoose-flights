const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type:  String,
        enum: ['American', 'Southwest', 'United'],
    },
    airport:{ 
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN'],
        default: 'DEN',
    },
    flightNo:{ 
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function () {
          const oneYearFromNow = new Date();
          oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
          return oneYearFromNow;
        },
      },
    });

    flightSchema.statics.getAll = function() {
      return this.find(); // Retrieve all flights from the database
    };

    module.exports = mongoose.model('Flight', flightSchema)