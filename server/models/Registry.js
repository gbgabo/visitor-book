const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

// Declare Schema
const RegistrySchema = new mongoose.Schema({
  email:{
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

RegistrySchema.plugin(mongoosePaginate);

//Add Model
mongoose.model("Registry", RegistrySchema);