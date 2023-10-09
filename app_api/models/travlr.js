const mongoose = require('mongoose');

//define the trip schemas
const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  name: { type: String, required: true, index: true },
  length: { type: String, required: true },
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: String, required: true }, //says its easier to store as a string, convert to an int when you need to check it and then revert back to a string
  image: { type: String, required: true },
  desscription: { type: String, required: true }
});
mongoose.model('trips', tripSchema);