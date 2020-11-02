const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postworkoutSchema = new Schema({
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

const Postworkout = mongoose.model("Postworkout", postworkoutSchema);

export default Postworkout; 