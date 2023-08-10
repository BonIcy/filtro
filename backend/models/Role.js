let mongoose = require('mongoose');

let roleSchema = new mongoose.Schema({
  rol: { 
    type: String, 
    required: true,
    enum: ['gerenteRol', 'trainterRol', 'camperRol'],
    default: ['camperRol'] 
    },
});

let Role = mongoose.model('Role', roleSchema);

module.exports = Role;
