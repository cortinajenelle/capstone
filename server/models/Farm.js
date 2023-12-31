import mongoose from "mongoose";

const farmSchema = new mongoose.Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farmer"
  },
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  address1: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  address2: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  city: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  state: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  zip: {
    type: String,
    required: true,
    validate: /^[0-9 ]*$/
  },
  farmgoods: {
    type: [String],
    required: true
  },
  opportunity: {
    type: [String],
    required: true
  },
  lat: {
    type: Number
  },
  lng: {
    type: Number
  }
});

const Farm = mongoose.model("Farm", farmSchema);

export default Farm;
