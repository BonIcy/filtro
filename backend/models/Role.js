let mongoose = require('mongoose');

let roleSchema = new mongoose.Schema({
  rol: { 
    type: String, 
    required: true,
    enum: ['GERENTE', 'TRAINER', 'CAMPER'],
    default: ['CAMPER'] 
    },
});

let Role = mongoose.model('Role', roleSchema);

module.exports = Role;
