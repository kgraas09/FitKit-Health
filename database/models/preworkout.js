const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preworkoutSchema = new Schema({
  _id: Number,
  results: [{
    name: String,
    description: String,
    flavor: String,
    servingSize: Number,
    primaryStimulant: String,
    otherIngredients: [],
  }]
});

const Preworkout = mongoose.model("Preworkout", preworkoutSchema);

export default Preworkout; 