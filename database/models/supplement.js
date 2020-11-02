const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplementalSchema = new Schema({
  _id: Number,
  name: String,
  description: String,
  flavor: String,
  servingSize: Number,
  other : String, 
  otherIngredients: [],
});

// Good opportunity to use REFS - could put an object inside of other ingrededients that references and "other ingredients" collection


const Supplemental = mongoose.model("Supplemental", supplementalSchema, 'supplementals');

export default Supplemental;  
