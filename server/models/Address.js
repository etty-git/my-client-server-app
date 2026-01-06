const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  city: {
     type: String,
      required: true },
  street: { 
    type: String,
     required: true },
  houseNumber: 
  { type: Number, 
    required: true },
  
});

module.exports = addressSchema;
