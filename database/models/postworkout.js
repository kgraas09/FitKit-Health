const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postworkoutSchema = new Schema({
  _id: Number,
  name: String,
  description: String,
  flavor: String,
  servingSize: Number,
  proteinBase: String,
  otherIngredients: [],
});

const Postworkout = mongoose.model("Postworkout", postworkoutSchema, 'postworkouts');

export default Postworkout; 