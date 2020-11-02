const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplementalSchema = new Schema({
  _id: Number,
  results: [{
    name: String,
    description: String,
    flavor: String,
    servingSize: Number,
    proteinBase: String,
    otherIngredients: [],
  }]
});

const Supplemental = mongoose.model("Supplemental", supplementalSchema);

export default Supplemental; 